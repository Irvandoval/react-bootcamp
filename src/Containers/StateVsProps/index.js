import React from 'react';
import CalcStateExample from './CalcStateExample';
import ClassCalcStateExample from './ClassCalcStateExample';
import StateExample from './StateExample';

function StateVsProps() {
  return (
    <div style={{ margin: 40, textAlign: 'left' }}>
      <StateExample />
      <hr />
      <CalcStateExample />
      <hr />
      <ClassCalcStateExample />
    </div>
  );
}

export default StateVsProps;
