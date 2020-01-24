import React from "react";
import {
    Nav,
    Navbar
} from "react-bootstrap";

class Header extends React.Component{

    constructor() {
        super();
    }

    render() {
        return(
            <Navbar className = "container">
                <Navbar.Brand bg = "light">

                </Navbar.Brand>
            </Navbar>
        )
    }
}