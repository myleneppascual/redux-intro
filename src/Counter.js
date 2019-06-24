import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from './actions';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.dispatch(increment());
  }

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dispatch(decrement());
  }

  reset = () => {
    this.props.dispatch(reset());
  }
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    count: state.count
  });
// export default Counter;
export default connect(mapStateToProps)(Counter);