import React from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";
import './styles/Header.css';
import logo from '../assets/images/Vodafone_icon.svg';

class Header extends React.Component{

    constructor() {
        super();
    }

    render() {
        return(
            <Navbar id = "container" fixed = "top">
                <Navbar.Brand>
                    <img src = {logo}
                         width = "50"
                         height = "50"
                         className = "logo d-lg-inline-block align-top"
                         alt = "Vodafone logo"
                    />
                    <p id = "header-title">Leaver App</p>
                </Navbar.Brand>
                <Nav className = "mr-auto">
                    <Nav.Link href = "#login">Login</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;