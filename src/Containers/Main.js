import React, { useEffect, useState } from 'react';
import ClassExample from '../Components/ClassExample';
import ClassWithLifeCycleExample from '../Components/ClassWithLifeCycleExample';
import ClassWithStateExample from '../Components/ClassWithStateExample';
import FunctionExample from '../Components/FunctionExample';
import FunctionWithStateExample from '../Components/FunctionWithStateExample';

function Main() {
  const [clear, setClear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClear(true);
    }, 16000);

    return () => {
      /**
       * Clear the timer, or you'll get an error
       * timer will continue working even after component
       * has been unmounted, to avoid that lacky of memory, we use
       * the cleaunp of useEffect
       */
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App-examples">
      <ClassExample />
      <ClassWithStateExample />
      {!clear && <ClassWithLifeCycleExample />}
      <FunctionExample />
      {!clear && <FunctionWithStateExample />}
    </div>
  );
}

export default Main;
