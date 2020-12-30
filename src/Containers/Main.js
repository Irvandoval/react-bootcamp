import React, { useEffect, useState } from 'react';
import ClassExample from '../Components/ClassExample';
import ClassWithLifeCycleExample from '../Components/ClassWithLifeCycleExample';
import ClassWithStateExample from '../Components/ClassWithStateExample';
import FunctionExample from '../Components/FunctionExample';
import FunctionWithStateExample from '../Components/FunctionWithStateExample';
//import JSXExample from '../Components/JSXExample';

function Main() {
  const [clear, setClear] = useState(false);
  const [text, setText] = useState('Your name');

  useEffect(() => {
    setTimeout(() => {
      setClear(true);
    }, 16000);
  }, []);

  return (
    <>
      <button onClick={() => setText('xxxxxxxxxxxxxxxx')}> change new text</button>
      <div className="App-examples">
        <ClassExample />
        <ClassWithStateExample text={text} setText={setText}/>
        {!clear && <ClassWithLifeCycleExample />}
        <FunctionExample />
        {!clear && <FunctionWithStateExample />}
      </div>

      {/*<div className="App-examples">
        <JSXExample />
  </div>*/}
    </>
  );
}

export default Main;
