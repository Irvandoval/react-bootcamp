import React, { useState } from 'react';

const List = ({ text, setText }) => {
  const [myList, setMyList] = useState(['element', 'element', 'element']);
  

  const addElement = () => {
    setMyList([...myList, text]);
    clearInput();
  };

  const clearInput = () => {
    setText('');
  };

  const clearList = () => {
    setMyList([]);
  };

  return (
    <>
      <ol className='list'>key
        {myList.map((item, index) => <li key={index}> {item} </li>)}
      </ol>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addElement}>Add element</button>
      <button onClick={clearInput}>Clear input</button>
      <button onClick={clearList}>Clear List</button>
    </>
  );
};

export default List;