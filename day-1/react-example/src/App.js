import React, { useState } from 'react';
import './App.css';
import List from './Components/List';

function App() {
  const [text, setText] = useState('irvin');
  return (
    <div className="App">
      <List text={text} setText={setText}/>
    </div>
  );
}

export default App;
