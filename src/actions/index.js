import types from './types';
import db from '../firebase';

export function updateChat(log){
    return {
        type: types.UPDATE_CHAT_LOG,
        payload: log,
    }
}

export function updateInput(name, value) {
    return{
        type: types.UPDATE_INPUT,
        payload: {
            name: name,
            value:value,
        },
    }
}

export function sendMessageToDatabase(message){
    db.ref('/chat-log').push({
        name: 'karth',
        message
    })
    return{
        type: types.SEND_MESSAGE,
    }
}