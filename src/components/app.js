import React from 'react';
import {Route} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import Home from './home';
import Chat from './chat';

const App = () => (
    <div>
        <div className="app">
            <Nav />
            <Route exact path='/' component={Home} />
            <Route exact path='/chat' component={Chat} />
        </div>
    </div>
);

export default App;
