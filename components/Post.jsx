import React from 'react';
import { useBlog } from '../contexts/BlogContext';
import { useParams } from 'react-router-dom';

function Post() {
  const { posts, postImages, noImage } = useBlog();
  const { id } = useParams();
  let currentPost;
  posts.forEach((post) => {
    if (post._id === id) {
      currentPost = post;
      return;
    }
  });

  return (
    <>
      {currentPost !== undefined ? (
        <div className="post-div">
          <div className="div-post-title">
            <h1 className="post-title">{currentPost.title}</h1>
            <hr />
          </div>
          <div className="div-post-img">
            {noImage.includes(currentPost._id) ? (
              <></>
            ) : postImages[currentPost._id] ? (
              <>
                <img
                  src={postImages[currentPost._id]}
                  alt={currentPost.title}
                  className="post-img"
                />
                <hr />
              </>
            ) : (
              <h2>Loading...</h2>
            )}
          </div>
          <div className="div-post-content">
            <p className="post-content">{currentPost.content}</p>
          </div>
        </div>
      ) : (
        <h1>Post not found</h1>
      )}
    </>
  );
}

export default Post;