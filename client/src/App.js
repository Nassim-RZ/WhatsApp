import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';
import { Chat, NotFound, Register, Login, Password } from './views';
import Auth from './Auth';
import AppRoute from 'AppRoutes';

class App extends Component {

  constructor(props){
    super(props);
    Auth.init();
  }

  render() {
    return (
      <div id="main-container" className="container-fluid">
        <Router>
          <Switch>
            <Route exact path='/AppRoute' element={<AppRoute />}/>
            <Route path='/password' exact element={<Password />} can={Auth.auth} redirect='/login' />
            <Route path='/' exact element={<Chat />} can={Auth.auth} redirect='/login' />
            <Route path='/register' exact element={<Register />} can={Auth.guest} redirect='/' />
            <Route path='/Login' exact element={<Login />} can={Auth.guest} redirect='/' />
            <Route path='*' element={<NotFound />}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;