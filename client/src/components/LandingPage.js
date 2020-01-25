import React from 'react';
import './styles/LandingPage.css';
import Login from './Login';

/////////////////////////////////////////////////////////////////////////
class LandingPage extends React.Component{

    render(){
        return(
            <div className = "container">
                <Login/>
            </div>
        )
    }
}


/////////////////////////////////////////////////////////////////////////
export default LandingPage;