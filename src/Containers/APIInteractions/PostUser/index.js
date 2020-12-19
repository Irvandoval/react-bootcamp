import React from 'react';
import Form from './Form';
import Info from './Info';
import PostUserProvider from './Context';

const PostUser = () => {
  return (<div style={{
    display: 'flex',
    alignItems: 'center'
  }}>
    <PostUserProvider>
      <Form />
      <Info />
    </PostUserProvider>
  </div>)
};

export default PostUser;