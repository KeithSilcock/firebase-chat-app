import React from "react";
import { Link } from "react-router-dom";

export default props => {
  const navStyle = {
    padding: "0 10px"
  };

  return (
    <nav style={navStyle} className="purple lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          {" "}
          Chatty App
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat-rooms">Chat</Link>
          </li>
          <li>
            <Link to="/create-room">Create Chat Room</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
