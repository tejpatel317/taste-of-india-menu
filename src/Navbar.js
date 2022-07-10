import React from "react";
import{ NavLink } from "react-router-dom";
import {Container, Nav, Navbar as NavbarStyle, Image} from 'react-bootstrap'


function Navbar({numberOfItems}) {

    const tasteOfIndiaLogo = "https://www.mytasteofindia.com/site/assets/images/uploads/tasteofindia-logo.png"
    const shoppingCartIcon = "https://cdn-icons-png.flaticon.com/512/4379/4379575.png"

    return (
        <NavbarStyle className="navcolor">
            <Container>
                <Image src={tasteOfIndiaLogo} alt="Taste Of India Logo" className="img-responsive justify-content-start" style={{height: "80px"}}/>
                <Nav className="justify-content-center">
                    <Nav.Link as={NavLink} exact to="/" className="fs-3 fw-normal mx-3 text-light my-auto">Home</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/menu" className="fs-3 fw-normal mx-3 text-light my-auto">Menu</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/reviews" className="fs-3 fw-normal mx-3 text-light my-auto">Reviews</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/shoppingcart" className="fs-3 fw-normal mx-3 text-light">
                        <button className="shoppingcartbutton">
                            <Image src={shoppingCartIcon} alt="Shopping Cart Icon" style={{height: "50px", position: "relative"}} className="fluid"/>
                            <div className="shoppingitemcount">{numberOfItems}</div>
                        </button>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarStyle>
    )
}

export default Navbar;