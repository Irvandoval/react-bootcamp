import React, { useState, createContext } from 'react';

export const BlogContext = createContext();

function BlogProvider(props) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <BlogContext.Provider
      value={{
        users: [users, setUsers],
        selectedUser: [selectedUser, setSelectedUser],
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
