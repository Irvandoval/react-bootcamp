import Axios from 'axios';
import React, { useState } from 'react';

function Comment({ comment }) {
  return (
    <div key={comment.id} className="Blog-Comment">
      <span>
        <strong>Name: </strong>
        {comment.name}
      </span>
      <span>
        <strong>Email: </strong>
        {comment.email}
      </span>
      <span>{comment.body}</span>
    </div>
  );
}

function Post({ post, handleOnClick, addComment }) {
  const [open, setOpen] = useState(false);
  const [commentText, setCommentText] = useState('');

  const insertCommentIntoPost = () => {
    Axios.post(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
      {
        postId: post.id,
        name: 'This is just a test',
        email: 'test@gmail.com',
        body: commentText,
      }
    )
      .then((result) => {
        addComment({
          ...result.data,
          postId: parseInt(result.data.postId, 10),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onClick = () => {
    handleOnClick(post.id);
    setOpen((isOpen) => !isOpen);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      insertCommentIntoPost();
    }
  };

  return (
    <div key={post.id} className="Blog-Post">
      <div onClick={onClick}>
        <span>
          <strong>{post.title}</strong>
        </span>
        <span>{post.body}</span>
      </div>

      {open && (
        <div className="Blog-Comments">
          {post.comments &&
            post.comments.map &&
            post.comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}

          <input
            type="text"
            placeholder="Add a comment..."
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
}

export default Post;
