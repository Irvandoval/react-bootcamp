import React, { useEffect, useState } from 'react';

function FunctionWithStateExample() {
  /**
   * We add state to functions using hooks
   * We use "useState" to declare a state variable
   */
  const [text] = useState('Hello there! enjoying React?');
  const [visits, setVisits] = useState(0);

  /**
   * We use "useEffect" to execute code when
   * * component has been mounted
   * * state variables have changed value
   * * component will unmount
   */
  useEffect(() => {
    /**
     * Executing effect
     * We will increment visits every 3 seconds
     * Interval will init 3 seconds after component was mounted
     */
    const interval = setInterval(() => {
      setVisits((currentVisits) => currentVisits + 1);
    }, 3000);

    return () => {
      /**
       * This code will be executed right before component
       * gets unmounted
       * We clear interval here to avoid effect to be executed
       * after component no longer exists
       */
      clearInterval(interval);
      console.log('I will be unmounted, bye!');
    };
  }, []);

  /**
   * We construct here the portion of the html that will be rendered
   * then we return JSX code
   */
  return (
    <div className="App-example">
      <p>Hi, I'm a function</p>

      <p>{text}</p>

      <span>Visits: {visits}</span>
    </div>
  );
}

export default FunctionWithStateExample;
