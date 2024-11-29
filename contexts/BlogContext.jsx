import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'
import {useAsync} from '../hooks/useAsync';
import { getPosts } from '../services/posts';

const blogContext = createContext();

export function useBlog() {
  return useContext(blogContext);
}

function BlogContext({children}) {

  const [posts, setPosts] = useState({});
  const [loading, error, value] = useAsync(getPosts);

  useEffect(() => {
    if (value) {
      setPosts(value);
    }
  }, [value]);

  return (
    <blogContext.Provider value={
      {
        posts,
        setPosts,
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