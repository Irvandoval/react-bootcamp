import React, { Component } from 'react';
import { Box, Button, Heading, TextInput } from 'grommet';
import ClassCalcPropExample from './ClassCalcPropExample';

class ClassCalcStateExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      op: '+',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setOp = (op) => {
    this.setState({
      op,
    });
  };

  clear = () => {
    this.setState({
      num1: 0,
      num2: 0,
      op: '+',
    });
  };

  render() {
    const { num1, num2, op } = this.state;

    return (
      <Box pad="small">
        <Heading level="3" margin="none" color="light-1">
          Hey look!, a tiny small calculator! (with classes)
        </Heading>

        <Box pad="xsmall" direction="row">
          <TextInput
            type="number"
            name="num1"
            placeholder="first numer"
            value={num1}
            onChange={this.handleChange}
          />
          <TextInput
            type="number"
            name="num2"
            placeholder="second numer"
            value={num2}
            onChange={this.handleChange}
          />
          {['+', '-', '/', '*', '%', '**'].map((opType) => {
            return (
              <Button
                key={opType}
                type="button"
                onClick={() => this.setOp(opType)}
                active={op === opType}
                label={opType}
              />
            );
          })}
        </Box>

        <ClassCalcPropExample
          num1={num1}
          num2={num2}
          op={op}
          clear={this.clear}
        />
      </Box>
    );
  }
}

export default ClassCalcStateExample;
