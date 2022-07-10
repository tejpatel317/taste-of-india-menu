import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap'

function AboutUs() {
    
    const paniPuri = "https://th.bing.com/th/id/R.51e6dcf7730cb0d442120ea0dff69121?rik=UVW0snp356vRDg&riu=http%3a%2f%2fwww.thefoodaholic.co.uk%2fwp-content%2fuploads%2f2016%2f09%2fIMG_0342.jpg&ehk=Jq1c%2fxryaUgJwEi%2fukW%2bc6hHM%2bb1ou9yFs2VXWC6GUw%3d&risl=&pid=ImgRaw&r=0"

    return (
        <Container fluid style={{ paddingBottom: 40}}>
            <Row>
                <Col className="aboutushalf1">
                    <h1>About Us</h1>
                    <p>Taste of India is a local New Jersey restaurant which offers traditional Indian dishes with a modernized approach. We use fresh ingredients and classic spices to constantly innovate and redefine traditional Indian dishes by exploring progressive ideas. We strive to provide our customers with the authentic taste of India and invite you to try our dishes.</p>
                </Col>
                <Col className="aboutushalf2 d-flex align-items-center justify-content-center">
                    <Image src={paniPuri} alt="PaniPuri" className="fluid" style={{height: "400px"}}></Image>
                </Col>
            </Row>
        </Container>
    )

}

export default AboutUs;