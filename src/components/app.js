import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import Chat from './chat';
import CreateChatRoom from './create_chat_room';

const App = () => (
    <div>
        <div className="app">
            <Nav />
            <Route exact path='/' component={Home} />
            <Route exact path='/chat/:id' component={Chat} />
            <Route exact path='/create-room' component={CreateChatRoom} />
        </div>
    </div>
);

export default App;
