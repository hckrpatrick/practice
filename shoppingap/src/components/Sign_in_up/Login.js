import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

import LoginModal from "./LoginModal";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      islogin: false,
      showloginmodal: false,
      setshowloginmodal: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      islogin: false,
    });
  }

  handleShow = () => {
    this.setState({
      showloginmodal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showloginmodal: false,
    });
  };

  render() {
    if (!this.state.islogin) {
      return (
        <>
          <Nav.Link onClick={this.handleShow}>Log in</Nav.Link>

          <LoginModal
            show={this.state.showloginmodal}
            handle={this.handleClose}
          />
        </>
      );
    } else {
      return <></>;
    }
  }
}

export default Login;

// import React, { Component } from "react";
// import axios from "axios";
// import { API_URL } from "../constants";

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "patrick",
//       password: "09263821551Pat",
//     };
//     this.onClickLogin = this.onClickLogin.bind(this);
//     this.onClickCheck = this.onClickCheck.bind(this);

//     axios.defaults.xsrfCookieName = "csrftoken";
//     axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
//   }

//   onClickLogin = () => {
//     axios
//       .post("http://192.168.0.28:8000/login/", this.state)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   onClickCheck = () => {
//     axios
//       .get("http://192.168.0.28:8000/checklogin/")
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.onClickLogin}>login1</button>
//         <button onClick={this.onClickCheck}>Check</button>
//       </div>
//     );
//   }
// }

// export default Login;
