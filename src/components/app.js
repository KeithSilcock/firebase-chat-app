import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { auth } from "../firebase";
import Nav from "./nav";
import Home from "./home";
import Chat from "./chat";
import CreateChatRoom from "./create_chat_room";
import ChatRooms from "./chat_rooms";
import SignUp from "./signup";
import { signInAction, signOutAction } from "../actions";
import routeAuth from "../HOC/auth";

import "materialize-css/dist/css/materialize.min.css";
import SignIn from "./sign_in";

class App extends React.Component {
  async componentDidMount() {
    await auth.onAuthStateChanged(user => {
      if (user) {
        console.log("user: ", user.displayName);
        this.props.signInAction(user);
      } else {
        console.log("No User");
        this.props.signOutAction();
      }
    });
  }

  render() {
    return (
      <div>
        <div className="app">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/chat/:id" component={routeAuth(Chat)} />
          <Route path="/create-room" component={routeAuth(CreateChatRoom)} />
          <Route path="/chat-rooms" component={routeAuth(ChatRooms)} />
          <Route
            path="/sign-up"
            component={routeAuth(SignUp, true, "/chat-rooms")}
          />
          <Route
            path="/sign-in"
            component={routeAuth(SignIn, true, "/chat-rooms")}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { signInAction, signOutAction }
  )(App)
);
