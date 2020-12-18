import React, { useState } from 'react';
import CalcPropExample from './CalcPropExample';

function CalcStateExample() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState('+');

  const clear = () => {
    setNum1(0);
    setNum2(0);
    setOp('+');
  };

  return (
    <div>
      <h2>Hey look!, a tiny small calculator!</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      {['+', '-', '/', '*', '%', '**'].map((opType) => {
        return (
          <button
            key={opType}
            type="button"
            onClick={() => setOp(opType)}
            style={{ ...(op === opType ? { border: '2px solid cyan' } : {}) }}
          >
            {opType}
          </button>
        );
      })}

      <CalcPropExample num1={num1} num2={num2} op={op} clear={clear} />
    </div>
  );
}

export default CalcStateExample;
