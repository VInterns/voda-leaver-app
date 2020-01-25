import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';
import LoginPage from "./components/Login"
import HomePage from './components/Home';

/////////////////////////////////////////////////////////////////////////
class App extends React.Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path = "/" exact component = {LandingPage}/>
          <Route path = "/chat" component = {ChatPage}/>
          <Route path = "/login" component = {LoginPage}/>
          <Route path = "/home" component = {HomePage}/>
        </Switch>
      </Router>
    );
  }
}

/////////////////////////////////////////////////////////////////////////
export default App;
