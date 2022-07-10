import React from "react";
import {Container} from 'react-bootstrap'
import Footer from "./Footer";

function ShoppingCart({cartItems, numberOfItems, removeFromCart}) {

    const shoppingCartComponents = cartItems.map((item) => {
        return (
            <div className="row border border-3 m-3 p-0 border-warning" key={item.id}>
                <div className="col-md-3"><img className="rounded m-3" src={item.url} width="100"/></div>
                <div className="col-md-4 my-auto h4">Palak Panner</div>
                    <div className="col-md-2 my-auto h5">Quantity: {item.quantity}</div>
                    <div className="col-md-1 my-auto h5">${item.price}</div>
                    <div className="col-md-2 my-auto h5">
                        <button className="btn btn-danger btn-lg py-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
            </div>
        )
    })

    return (
        <Container>
            <h1>Hello from ShoppingCart</h1>
        </Container>
    )
}

export default ShoppingCart;