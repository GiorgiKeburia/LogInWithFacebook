import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContant;
    if (this.state.isLoggedIn) {
      fbContant=null
    } else {
      fbContant = (
        <FacebookLogin
          appId="895914874666112"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContant}</div>;
  }
}
