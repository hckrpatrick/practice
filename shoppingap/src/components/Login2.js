import React, { Component } from "react";
import axios from "axios";

class Login2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "pasanchez",
      password: "pasanchez",
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = () => {
    axios.post("http://127.0.0.1:8000/login", this.state).then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>login2</button>
      </div>
    );
  }
}

export default Login2;
