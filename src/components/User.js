import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>I am user - {this.props.name}</h1>
        <p>The count value: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState((preState) => ({ count: preState.count + 1 }))
          }
        >
          Click
        </button>
      </>
    );
  }
}

export default User;
