import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
  state = {
    count: 0
  };

  plus = () => {
    this.setState(current => ({count: current.count + 1}))
  }
  minus = () => {
    this.setState(current => ({count: this.state.count - 1}))
  }

  render() {
    return <div>
     <h1>Current number: {this.state.count}</h1>
     <button onClick={this.plus}>Плюс</button>
     <button onClick={this.minus}>Минус</button>
    </div>
  }
}

export default App;
