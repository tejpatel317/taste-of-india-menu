import React from "react";
import {Container} from 'react-bootstrap'

function DisplayPage() {

    const tasteOfIndiaLogo = "https://static.lieferando.de/images/restaurants/de/0OOP70N1/logo_465x320.png"

    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <section className="displaypagebackground d-flex align-items-center justify-content-center">
                <div className="displaypagecontent d-flex align-items-center justify-content-center">
                    <img src={tasteOfIndiaLogo} alt="TASTE OF INDIA"/>
                </div>
            </section>
        </Container>
    )
}

export default DisplayPage;