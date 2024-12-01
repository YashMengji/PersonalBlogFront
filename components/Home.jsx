import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext.jsx'
import {getPostImg} from '../services/posts';

function Home() {
  const {posts, postImages, setPostImages} = useBlog();
  
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