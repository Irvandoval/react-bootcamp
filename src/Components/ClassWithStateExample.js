import React, { Component } from 'react';

class ClassWithStateExample extends Component {
  constructor(props) {
    super(props);

    /**
     * We initialize state and class variables here
     */
    this.state = {
      text: 'Hello there!',
      visits: 0,
    };
  }

  render() {
    /**
     * We construct here the portion of the html that will be rendered
     */
    return (
      <div className="App-example">
        <p>{this.state.text}</p>
        <span>Visits: {this.state.visits}</span>
      </div>
    );
  }
}

export default ClassWithStateExample;
