import {React, useState} from "react";
import Footer from "./Footer";
import {Container, Row, Col, Card} from 'react-bootstrap';

function Reviews() {
    return (
        <>
            <Container fluid className="hm-auto bg-light">
                <h1 className="text-center my-3 fontstyle">Customer Reviews</h1>
                <h4 className="text-center w-50 mx-auto my-4 fontstyle">If you enjoyed your food and time at the restaurant or have feedback on how we can improve, we encourage you to submit a rating by filling out the form below.</h4>
                <div className="pb-5">
                    <form className="form-control w-50 mx-auto" onSubmit={handleFormSubmit}> 
                        <div className="m-3">
                            <label className="form-label">First Name:</label>
                            <input className="form-control" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Last Name:</label>
                            <input className="form-control" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Rating: </label>
                            <select className="form-select" value={rating} onChange={(e) => setRating(e.target.value)}>
                                <option value="5">5 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="1">1 Stars</option>
                            </select>
                        </div>
                        <div className="m-3">
                            <label className="form-label">Comments:</label>
                            <input className="form-control" type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
                        </div>
                        <div className="m-3 d-flex justify-content-center">
                            <input className="btn btn-success" type="submit" value="Submit Review" />
                        </div>
                    </form>
                </div>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default Reviews;