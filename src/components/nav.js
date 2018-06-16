import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../actions";

function Nav(props) {
  const navStyle = {
    padding: "0 10px"
  };
  const { auth, username } = props.user;

  const renderLinks = () => {
    if (auth) {
      return (
        <Fragment>
          <li>
            <Link to="/chat-rooms">Chat</Link>
          </li>
          <li>
            <Link to="/create-room">Create Chat Room</Link>
          </li>
          <li>
            <button
              className="btn grey"
              onClick={() => {
                props.signOutUser();
              }}
            >
              Sign Out
            </button>
          </li>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </Fragment>
    );
  };

  return (
    <nav style={navStyle} className="purple lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          {" "}
          Chatty App
        </Link>
        <ul className="right">
          <li>{username ? `Hello ${username}` : null}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { signOutUser }
)(Nav);
