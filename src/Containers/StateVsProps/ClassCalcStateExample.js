import React, { Component } from 'react';
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
      <div>
        <h2>Hey look!, a tiny small calculator! (with classes)</h2>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={this.handleChange}
        />
        {['+', '-', '/', '*', '%', '**'].map((opType) => {
          return (
            <button
              key={opType}
              type="button"
              onClick={() => this.setOp(opType)}
              style={{
                ...(op === opType ? { border: '2px solid cyan' } : {}),
              }}
            >
              {opType}
            </button>
          );
        })}

        <ClassCalcPropExample
          num1={num1}
          num2={num2}
          op={op}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default ClassCalcStateExample;
