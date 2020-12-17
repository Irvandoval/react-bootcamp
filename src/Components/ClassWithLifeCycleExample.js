import React, { Component } from 'react';

class ClassWithLifeCycleExample extends Component {
  constructor(props) {
    super(props);

    /**
     * We initialize state and class variables here
     */
    this.state = {
      text: 'Hello there!',
      visits: 0,
    };

    this.interval = null;
  }

  componentWillMount() {
    /**
     * This will executed right before the component is mounted
     */
    console.log('I will mount');
  }

  componentDidMount() {
    /**
     * This will be executed once the component has been mounted
     */
    console.log('I just mounted');

    this.interval = setInterval(() => {
      this.setState((state) => {
        return {
          visits: state.visits + 1,
        };
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    /**
     * This is executed everytime props or state have changes
     */
    console.log('I was updated. I will render again');
  }

  componentWillUnmount() {
    /**
     * This will executed right before the component is unmounted
     */
    console.log('I will unmount');
    clearInterval(this.interval);
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

export default ClassWithLifeCycleExample;
