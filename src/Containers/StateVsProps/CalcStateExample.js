import { Box, Button, Heading, TextInput } from 'grommet';
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
    <Box pad="small">
      <Heading level="3" margin="none" color="light-1">
        Hey look!, a tiny small calculator!
      </Heading>

      <Box pad="xsmall" direction="row">
        <TextInput
          type="number"
          placeholder="first numer"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <TextInput
          type="number"
          placeholder="second numer"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        {['+', '-', '/', '*', '%', '**'].map((opType) => {
          return (
            <Button
              key={opType}
              type="button"
              onClick={() => setOp(opType)}
              active={op === opType}
              label={opType}
            />
          );
        })}
      </Box>

      <CalcPropExample num1={num1} num2={num2} op={op} clear={clear} />
    </Box>
  );
}

export default CalcStateExample;
