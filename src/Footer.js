import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {

    const githubIcon = "https://camo.githubusercontent.com/4133dc1cd4511d4a292b84ce10e52e4ed92569fb2a8165381c9c47be5edc2796/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f706e672f6769746875622e706e67"
    const linkedinIcon ="https://camo.githubusercontent.com/c8a9c5b414cd812ad6a97a46c29af67239ddaeae08c41724ff7d945fb4c047e5/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6c696e6b6564696e2e737667"

    return (
        <Container fluid className="footercontainter">
            <Row className="mb-5 px-5 pt-5">
                <Col className="col-md-3 mb-5 text-center">
                    <p className="h3">LOCATION</p>
                    <p>1557 US-46</p>
                    <p>Parsippany-Troy Hills, NJ 07054</p>
                </Col>
                <Col className="col-md-3 mb-5 text-center">
                    <p className="h3">HOURS</p>
                    <p>Monday - Friday</p>
                    <p>11:00AM - 9:00PM</p>
                    <p>Saturday - Sunday</p>
                    <p>11:00AM - 10:45PM</p>
                </Col>
                <Col className="col-md-3 mb-5 text-center">
                    <p className="h3">Contact</p>
                    <p>839-276-1882</p>
                    <p>tasteofindia@gmail.com</p>
                </Col>
                <Col className="col-md-3 mb-5 text-center">
                    <p className="h3">Follow Us</p>
                    <a href="https://github.com/tejpatel317">
                        <img src={githubIcon} className="socials" alt="githubIcon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/tej-patel-86a2bb149/">
                        <img src={linkedinIcon} className="socials" alt="LinkedInIcon"/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;