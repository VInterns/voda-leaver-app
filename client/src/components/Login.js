import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

/////////////////////////////////////////////////////////////////////////
class Login extends React.Component{


    render(){
        return(
            <Form className="auth-form">
                <Form.Group controlId="loginUsername">
                    <Form.Control 
                        type = "text"
                        name = "username"
                        placeholder = "Enter username"
                        onChange = {
                            this.handleInputChange}/>
                </Form.Group>
    
                <Form.Group controlId="loginPassword">
                    <Form.Control 
                        type = "password"
                        name = "password"
                        placeholder = "Enter Password"
                        onChange = {this.handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleLogin}>
                    Login
                </Button>
        </Form>
        )
    }
}

/////////////////////////////////////////////////////////////////////////
export default Login;