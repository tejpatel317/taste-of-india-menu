import React from "react";
import{ NavLink } from "react-router-dom";
import {Container, Nav, Navbar as NavbarStyle, Image} from 'react-bootstrap'


function Navbar() {

    const tasteOfIndiaLogo = "https://www.mytasteofindia.com/site/assets/images/uploads/tasteofindia-logo.png"
    const shoppingCartIcon = "https://cdn-icons-png.flaticon.com/512/4379/4379575.png"

    return (
        <NavbarStyle>
            <Container>
                <Image/>
                <Nav>
                    <Nav.Link as={NavLink} exact to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/menu">Menu</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/reviews">Reviews</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/shoppingcart">PlaceHolder</Nav.Link>
                </Nav>
            </Container>
        </NavbarStyle>
    )
}

export default Navbar;