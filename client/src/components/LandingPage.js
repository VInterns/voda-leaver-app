import React from 'react';
import {
    Tabs,
    Tab
} from 'react-bootstrap';
import './styles/LandingPage.css';
import Registeration from './Registeration';
import Login from './Login';

/////////////////////////////////////////////////////////////////////////
class LandingPage extends React.Component{

    state = {
        loadingState: false
    }

    setRenderLodaingState = (loadingState) => {
        this.setState({
            loadingState: loadingState
        })
    }

    render(){
        return(
            <div className = "container">
                <div className = {`overlay auth-loading ${this.state.loadingState ? '': 'visibility-hidden'}`}>
                    <h1>Loading</h1>
                </div>
                <div className = "authentication-screen">
                    <Tabs variant = "pils" defaultActiveKey = "login">
                        <Tab eventKey = "login" title = "Login">
                            <Registeration loadingState = {this.setRenderLodaingState}/>
                        </Tab>
                        <Tab eventKey = "signup" title = "Signup">
                            <Login loadingState = {this.setRenderLodaingState}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}


/////////////////////////////////////////////////////////////////////////
export default LandingPage;