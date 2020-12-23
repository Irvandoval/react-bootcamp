import { Box, Button, Heading, Text } from 'grommet';
import { Refresh } from 'grommet-icons';
import React, { Component } from 'react';

function parse(str) {
  // eslint-disable-next-line no-new-func
  return Function(`'use strict'; return (${str})`)();
}

class ClassCalcPropExample extends Component {
  render() {
    const { num1, num2, op, clear } = this.props;
    let result;
    try {
      result = parse(`${num1}${op}${num2}`);
    } catch (error) {
      alert('There was an error!');
    }

    return (
      <Box pad="medium">
        <Text>The result is</Text>
        <Heading level="1" margin="none" color="controls">
          {result}
        </Heading>
        <Button
          type="button"
          color="defult"
          icon={<Refresh />}
          onClick={clear}
          label="Clear?"
        />
      </Box>
    );
  }
}

export default ClassCalcPropExample;
