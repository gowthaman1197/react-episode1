import User from "./User";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>About content</h1>
        <User name="Gowthaman" />
      </div>
    );
  }
}

export default About;
