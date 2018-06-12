import types from './types';
import db from '../firebase';

export function updateChat(roomData){

    console.log('roomdata', roomData)

    return {
        type: types.UPDATE_CHAT_LOG,
        chatLog: roomData.chatLog,
        name: roomData.name
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

export function sendMessageToDatabase(message, roomId){
    db.ref(`/chat-rooms/${roomId}/chatLog`).push({
        name: 'karth',
        message
    });
    return{
        type: types.SEND_MESSAGE,
    }
}

export function clearInput(name){
    return{
        type: types.CLEAR_INPUT,
        payload: name,
    }
}

export async function createRoom(name){

    const newRoom = {
        name,
        chatLog:{
            '0':{
                message:`Welcome to your new chatroom: ${name}`,
                name:'Admin'
            }
        },
    };

    const response = await db.ref('/chat-rooms').push(newRoom);
    return response.key;
}