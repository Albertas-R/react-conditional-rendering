// Conditional Rendering:
// 1. If / else
// 2. Element Variables
// 3. Ternary Conditional Operator
// 4. Short Circuit Operator &&

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 4. Short Circuit Operator && (when I want render something or nothing)
    // return this.state.isLoggedIn && <div>Welcome Albertas</div>;

    // 3. Ternary Conditional Operator
    return this.state.isLoggedIn ? <div>Welcome Albertas</div> : <div>Welcome Guest</div>;

    // 2. Element Variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Albertas</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    // 1. If / else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Albertas</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
