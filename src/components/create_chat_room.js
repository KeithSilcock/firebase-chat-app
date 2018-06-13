import React from "react";
import {connect} from "react-redux";
import {updateInput, sendMessageToDatabase, clearInput, createRoom} from "../actions";


class CreateClassRoom extends React.Component{

    async handleCreateRoom(e){
        e.preventDefault();

        const key = await createRoom(this.props.roomName);

        this.props.clearInput('roomName');
        this.props.history.push(`/chat/${key}`);
    }
    callUpdateInfo(e){
        const {name, value} = e.target;
        this.props.updateInput(name, value);
    }

    componentWillUnmount(){
        this.props.clearInput('roomName');
    }

    render(){

        const {roomName} = this.props;

        return(
            <div className="row">
                <form className="col s12" onSubmit={this.handleCreateRoom.bind(this)}>
                    <div className="row">
                        <div className="col s8 offset-s2">
                            <input type="text" name="roomName" onChange={this.callUpdateInfo.bind(this)}
                                   value={roomName} placeholder="Enter new room name"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        roomName: state.input.roomName,
    }
}


export default connect(mapStateToProps, {updateInput, createRoom, sendMessageToDatabase, clearInput})(CreateClassRoom);