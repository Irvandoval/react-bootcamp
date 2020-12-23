import Axios from 'axios';
import { Box, Heading, Text } from 'grommet';
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
      .then((result) => {
        setPosts(result.data);
      })
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
    <Box gridArea="main1" background="light-1" pad="xsmall">
      <Heading level="3" margin="none" color="dark-1">
        Hey look!, Here's a list of posts from{' '}
        <Text color="brand" weight="bold" size="8">
          {selectedUser.name}
        </Text>
      </Heading>

      <Box pad="xsmall">
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
      </Box>
    </Box>
  );
}

export default Posts;
