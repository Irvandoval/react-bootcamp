import React, { Component } from 'react';

class ClassCalcPropExample extends Component {
  render() {
    const { num1, num2, op, clear } = this.props;
    let result;
    try {
      result = eval(`${num1}${op}${num2}`);
    } catch (error) {
      alert('There was an error!');
    }

    return (
      <div>
        The result is <strong>{result}</strong>
        <button onClick={clear}>Clear?</button>
      </div>
    );
  }
}

export default ClassCalcPropExample;
