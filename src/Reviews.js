import {React, useState} from "react";
import Footer from "./Footer";
import {Container, Row, Col, Card} from 'react-bootstrap';

function Reviews({reviews, setReviews}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [rating, setRating] = useState("5")
    const [comment, setComment] = useState("")
    
    function handleFormSubmit(e) {
        e.preventDefault()
    
        const formObjectForPost = {
          name : `${firstName} ${lastName}`,
          rating : rating,
          comment : comment,
        }
    
        fetch("http://localhost:3000/reviews", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(formObjectForPost)
        })
        .then((r) => r.json())
        .then((newReview) => setReviews([...reviews, newReview]))
    }

    function starImages(rating) {
        const starArray = Array(parseInt(rating)).fill("")

        const newStarArray = starArray.map((element, index) => {
            return(
                <img key={index} className="float-end" src={starItem} style={{height: "25px"}}/>
            )
        })

        return newStarArray
    }

    const compReviews = reviews.map((review) => {
        return (
        <Col key={review.id} className="col-md-4 p-3">
            <Card>
                <Card.Header>
                    <h4 className="float-start my-auto">{review.name}</h4>
                    {starImages(review.rating)}
                    <h5 className="float-end mx-2 my-auto">{review.rating}/5</h5>
                </Card.Header>
                <Card.Body className="bg-light m-0 border reviewtext">{review.comment}</Card.Body>
            </Card>                    
        </Col>)
    })

    return (
        <>
            <Container fluid className="hm-auto bg-light">
                <h1 className="text-center my-3 fontstyle">Customer Reviews</h1>
                    <Row>
                        {compReviews}
                    </Row>
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