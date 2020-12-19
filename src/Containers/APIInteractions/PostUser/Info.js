import React, { useContext } from 'react';
import { PostUserContext } from './Context';

const Info = () => {
  const { newUser: [newUser] } = useContext(PostUserContext);
  return (<div style={{
    border: '1px solid grey',
    width: '20%',
    height: 'auto'
  }}>
    {newUser ?
      `name: ${newUser.name}
       email: ${newUser.email}
       gender: ${newUser.gender}
       status: ${newUser.status}`
      : <div>Not data available</div>}
  </div>)
};

export default Info;