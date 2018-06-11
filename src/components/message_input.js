import React from "react";
import {connect} from "react-redux";
import {updateInput, sendMessageToDatabase} from "../actions";

class MessageInput extends React.Component{
    sendMessage(e){
        e.preventDefault();

        sendMessageToDatabase(this.props.message);

    }
    callUpdateInfo(e){
        const {name, value} = e.target;
        this.props.updateInput(name, value);
    }

    render(){
        const {message} = this.props;

        return(
            <div className="row">
                <form className="col s12" onSubmit={this.sendMessage.bind(this)}>
                    <div className="row">
                        <div className="col s6 offset-s3">
                            <input onChange={this.callUpdateInfo.bind(this)}
                                   type="text" name="message" placeholder="Message..."
                                   value={message}/>
                            <button type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {message: state.input.message};
}

export default connect(mapStateToProps, {updateInput, sendMessageToDatabase})(MessageInput);