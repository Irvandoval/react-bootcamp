import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from './Context';
import Post from './Post';

function Posts() {
  const {
    selectedUser: [selectedUser],
  } = useContext(BlogContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/posts`
    )
      .then((result) => setPosts(result.data))
      .catch((err) => {
        console.error(err);
      });
  }, [selectedUser]);

  const fetchComments = (id) => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((result) => {
        setPosts((currentPosts) =>
          currentPosts.map((post) => {
            if (post.id === id) {
              return {
                ...post,
                comments: result.data,
              };
            }
            return post;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addComment = (comment) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id === comment.postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                ...comment,
                id: Math.floor(Math.random() * 100000),
              },
            ],
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="Blog-Posts-Container">
      <h3>
        Hey look!, Here's a list of posts from{' '}
        <strong>{selectedUser.name}</strong>
      </h3>

      <div className="Blog-Posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              handleOnClick={fetchComments}
              addComment={addComment}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
