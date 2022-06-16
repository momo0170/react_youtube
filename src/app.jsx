import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <span>{this.state.count}</span>
        <button
          onClick={() => {
            this.setState((state) => {
              return { count: state.count + 1 };
            });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
export default App;
