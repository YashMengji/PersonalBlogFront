import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import {useAsync} from '../hooks/useAsync';
import { getPosts, getPostImg } from '../services/posts';

const blogContext = createContext();

export function useBlog() {
  return useContext(blogContext);
}

function BlogContext({children}) {

  const [posts, setPosts] = useState([]);
  const [postImages, setPostImages] = useState({}); // State to store post images
  const { loading, error, value } = useAsync(getPosts);

  useEffect(() => {
    if (value) {
      setPosts(value);
      console.log(value);
    }
  }, [value]);
  useEffect(() => {
    const fetchImages = async () => {
      const images = {};
      for (const post of posts) {
        try {
          const response = await getPostImg(post._id); // Fetch image
          if(response.size !== 0) {
            images[post._id] = URL.createObjectURL(response); // Convert to blob URL
          }
        } catch (error) {
          console.error(`Error fetching image for post ${post._id}:`, error);
        }
      }
      setPostImages(images);
    };
    fetchImages();
  }, [posts]);

  return (
    <blogContext.Provider value={
      {
        posts,
        setPosts,
        postImages,
        setPostImages,
      }
    }
    >
      {
        loading ? (<h1>Loading...</h1>) :
        error ? (<h1>Error</h1>) :
        children
      }
    </blogContext.Provider>
  )
}

export default BlogContext