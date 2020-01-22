import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';

/////////////////////////////////////////////////////////////////////////
class App extends React.Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route path = "/" exact component = {LandingPage}/>
          <Route path = "/chat" component = {ChatPage}/>
        </Switch>
      </Router>
    );
  }
}

/////////////////////////////////////////////////////////////////////////
export default App;
