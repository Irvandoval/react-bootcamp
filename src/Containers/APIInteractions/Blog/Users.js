import Axios from 'axios';
import React, { useContext, useEffect } from 'react';
import Albums from './Albums';
import { BlogContext } from './Context';
import Posts from './Posts';

function Users() {
  const {
    users: [users, setUsers],
    selectedUser: [selectedUser, setSelectedUser],
  } = useContext(BlogContext);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setUsers]);

  return (
    <div className="Blog-UserList">
      {selectedUser ? (
        <div style={{ display: 'flex' }}>
          <Posts />
          <Albums />
        </div>
      ) : (
        users.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className="Blog-User"
            >
              <span>
                <strong>Name: </strong>
                {user.name}
              </span>
              <span>
                <strong>Username: </strong>
                {user.username}
              </span>
              <span>
                <strong>Email: </strong>
                {user.email}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Users;
