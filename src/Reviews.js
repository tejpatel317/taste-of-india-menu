import {React, useState} from "react";
import Footer from "./Footer";
import {Container, Row, Col, Card} from 'react-bootstrap';

function Reviews() {
    return (
        <>
            <Container fluid className="hm-auto bg-light">
                <h1 className="text-center my-3 fontstyle">Customer Reviews</h1>
                <h4 className="text-center w-50 mx-auto my-4 fontstyle">If you enjoyed your food and time at the restaurant or have feedback on how we can improve, we encourage you to submit a rating by filling out the form below.</h4>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default Reviews;