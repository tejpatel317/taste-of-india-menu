import {React} from "react";
import { Card, Row, Col} from "react-bootstrap";

function FoodItem({menuItem, addToCart, removeFromCart, cartItems}) {
    
    const {id, item, url, price} = menuItem

    const selectedItem = cartItems.find((item) => item.id === id)

    function handleAddClick() {
        addToCart(id)
    }

    function handleRemoveClick() {
        removeFromCart(id)
    }


    return (
        <Card>
            <Card.Header className="h3 text-center bg-warning">{item}</Card.Header>
            <Card.Img src={url} style={{height: "200px", objectFit: "cover"}}/>
            <Card.Body className="bg-light m-0 border">
                <Row className="p-0 m-0"> 
                    <Col className="col-md-6">
                        <h5 className="mb-0 text-start">{selectedItem ? selectedItem.quantity : 0} In Cart</h5>    
                    </Col>
                    <Col className="col-md-6">
                        <Card.Text className="text-end h5">${price}</Card.Text>
                    </Col>
                </Row>
                <Row className="p-0 mt-2">
                    <Col className="md-12 text-center">
                        <button className="btn btn-outline-success" onClick={handleAddClick}>
                            Add
                        </button>
                        {selectedItem ? 
                            <button className="btn btn-outline-danger mx-2" onClick={handleRemoveClick}> 
                            Remove
                            </button> :
                            null
                        }
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default FoodItem;