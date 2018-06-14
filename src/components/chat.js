import React from "react";
import db from "../firebase";
import MessageInput from "./message_input";
import { connect } from "react-redux";
import { updateChat, setRoom, clearChatData } from "../actions";

class Chat extends React.Component {
  componentDidMount() {
    const chatRoomId = this.props.match.params.id;

    if (!this.props.roomName) {
      db.ref("/chat-rooms")
        .orderByChild("chatId")
        .equalTo(chatRoomId)
        .once("value", snapshot => {
          const rooms = snapshot.val();

          const { name } = rooms[Object.keys(rooms)[0]];

          this.props.setRoom(name);
        });
    }

    this.dbRef = db.ref(`/chat-logs/${chatRoomId}`);

    this.dbRef.on("value", snapshot => {
      this.props.updateChat(snapshot.val());
    });
  }

  componentWillUnmount() {
    this.dbRef.off();
    this.props.clearChatData();
  }

  render() {
    const {
      chatLog,
      roomName,
      match: { params }
    } = this.props;

    const chatElements = Object.keys(chatLog).map((key, index) => {
      const { name, message } = chatLog[key];
      return (
        <li key={key} className="collection-item">
          <b>{name}</b>: {message}
        </li>
      );
    });

    return (
      <div className="center">
        <h1>{`Welcome to: ${roomName}!` || "A chapt room"}</h1>
        <h4>You're now in a gross chatroom. Please be disrespectful</h4>
        <div className="chatSpace">
          <ul className="collection">{chatElements}</ul>
        </div>
        <MessageInput roomId={params.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    chatLog: state.chat.log,
    roomName: state.chat.name
  };
}

export default connect(
  mapStateToProps,
  { updateChat, setRoom, clearChatData }
)(Chat);
