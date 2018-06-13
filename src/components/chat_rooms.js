import React from "react";
import db from "../firebase";
import { updateRooms, setRoom } from "../actions";
import { connect } from "react-redux";

class ChatRooms extends React.Component {
  componentDidMount() {
    db.ref("/chat-rooms").on("value", snapshot => {
      this.props.updateRooms(snapshot.val());
    });
  }

  selectRoom(room) {
    this.props.setRoom(room.name);

    this.props.history.push(`/chat/${room.chatId}`);
  }

  render() {
    const { rooms } = this.props;
    const roomList = Object.keys(rooms).map(k => {
      return (
        <li key={k} onClick={() => this.selectRoom(rooms[k])}>
          {rooms[k].name}
        </li>
      );
    });

    return (
      <div>
        <h1 className="center">Available Rooms</h1>
        <div className="row">
          <div className="col s8 offset-s2">
            <ul className="collection">{roomList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.chat.rooms
  };
}

export default connect(
  mapStateToProps,
  { updateRooms, setRoom }
)(ChatRooms);
