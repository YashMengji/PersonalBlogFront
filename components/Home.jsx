import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext.jsx'
import {getPostImg} from '../services/posts';

function Home() {
  const {posts} = useBlog();
  const [postImages, setPostImages] = useState({}); // State to store post images

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
    <div className="home-div">
      {
        posts.map((post) => 
          (
            <div className="div-post-card" key={post._id}>
              <div className="div-post-card-img">
                { postImages[post._id] ? 
                  (
                    <img
                      src={postImages[post._id]}
                      alt={post.title}
                      className="post-card-img"
                    />
                  ) : (
                    <p className='no-image-text'>No Image</p>
                  )
                }
              </div>
              <div className="div-post-card-info">
                <Link className='post-link' to={`/posts/${post._id}`} >
                  <div className="div-post-card-title">
                    {post.title}
                  </div>
                  <div className="div-post-card-content">
                    {post.content}
                  </div>
                </Link>
              </div>
            </div>
          ) 
        )
      }
    </div>
  )
}

export default Home;