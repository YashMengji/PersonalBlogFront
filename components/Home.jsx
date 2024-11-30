import React from 'react'
import { useBlog } from '../contexts/BlogContext'


function Home() {
  const {posts, setPosts} = useBlog();
  return (
    <div className="home-div">
      {
        posts.map((post) => {
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        })
      }
    </div>
  )
}

export default Home