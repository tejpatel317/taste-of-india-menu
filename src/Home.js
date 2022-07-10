import React from "react";
import DisplayPage from "./DisplayPage";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import {Container} from 'react-bootstrap';

function Home() {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
            <DisplayPage></DisplayPage>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </Container>
    )
}

export default Home;