import Axios from 'axios';
import { Box, Text, TextInput } from 'grommet';
import React, { useState } from 'react';

function Comment({ comment }) {
  return (
    <Box
      align="stretch"
      border={{ color: 'dark-1', size: 'xxsmall' }}
      pad={{ vertical: 'small', horizontal: 'medium' }}
      round="medium"
      elevation="medium"
      margin="xsmall"
      gap="xsmall"
    >
      <Text weight="bold" size="xsmall">
        {comment.name}
      </Text>
      <Text size="xsmall" color="brand">
        {comment.email}
      </Text>
      <Text size="xsmall">{comment.body}</Text>
    </Box>
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
    <Box background="light-3" pad="xsmall">
      <Box
        align="stretch"
        border={{ color: 'dark-1', size: 'xxsmall' }}
        pad={{ vertical: 'small', horizontal: 'medium' }}
        round="medium"
        elevation="medium"
        margin="xsmall"
        gap="xsmall"
        onClick={onClick}
      >
        <Text weight="bold" size="xsmall">
          {post.title}
        </Text>
        <Text size="xsmall" truncate={!open}>
          {post.body}
        </Text>
      </Box>

      {open && (
        <Box
          background="light-1"
          pad="xsmall"
          margin={{ left: 'large' }}
          round="small"
        >
          {post.comments &&
            post.comments.map &&
            post.comments.map((comment) => {
              return <Comment key={comment.id} comment={comment} />;
            })}

          <TextInput
            placeholder="Add a comment..."
            onChange={(e) => setCommentText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
      )}
    </Box>
  );
}

export default Post;
