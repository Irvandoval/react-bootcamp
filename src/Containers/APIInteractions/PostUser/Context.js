import React, { useState, createContext } from 'react';

export const PostUserContext = createContext();

function PostUserProvider(props) {
  const [newUser, setNewUser] = useState(null);

  return (
    <PostUserContext.Provider
      value={{
        newUser: [newUser, setNewUser]
      }}
    >
      {props.children}
    </PostUserContext.Provider>
  );
}

export default PostUserProvider;
