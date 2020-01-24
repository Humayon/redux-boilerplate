import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.btnincrementCount(10)}>
          Increment
        </button>
        <button onClick={() => this.props.btndecrementCount(5)}>
          Decrement
        </button>
        <button onClick={() => this.props.btnresetCount(0)}>Reset</button>
      </div>
    );
  }
}

export default App;
