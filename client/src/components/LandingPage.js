import React from 'react';
import './styles/LandingPage.css';
import Login from './Login';

/////////////////////////////////////////////////////////////////////////
class LandingPage extends React.Component{

    render(){
        return(
            <div>
                <Login/>
            </div>
        )
    }
}


/////////////////////////////////////////////////////////////////////////
export default LandingPage;