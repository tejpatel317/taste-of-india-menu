import React from "react";
import {Container} from 'react-bootstrap'
import Footer from "./Footer";

function ShoppingCart({cartItems, numberOfItems, removeFromCart}) {

    const shoppingCartComponents = cartItems.map((item) => {
        return (
            <div className="row border border-3 m-3 p-0 border-warning" key={item.id}>
                <div className="col-md-3"><img className="rounded m-3" src={item.url} alt="Food Item" width="100"/></div>
                <div className="col-md-4 my-auto h4">Palak Panner</div>
                    <div className="col-md-2 my-auto h5">Quantity: {item.quantity}</div>
                    <div className="col-md-1 my-auto h5">${item.price}</div>
                    <div className="col-md-2 my-auto h5">
                        <button className="btn btn-danger btn-lg py-2" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
            </div>
        )
    })
    
    let price = parseFloat(cartItems.reduce((total, item) => (total + item.price*item.quantity),0).toFixed(2))
    let tax = parseFloat((price*0.08).toFixed(2))
    let total = parseFloat((price+tax).toFixed(2))

    function checkedOut() {
        alert("Your order has been placed. Thank you!")
    }

    return (
        <>
            <Container className="shoppingcartcontainer1 d-flex align-items-center justify-content-center mt-3 ">
                <div className="shoppingcartcontainer2 mt-5 border border-dark border-5">
                    <h2 className="mb-0 mx-3 my-2">Shopping Cart</h2>
                    <div className="d-flex justify-content-between">
                        <p className="mx-3 my-2">You have {numberOfItems} items in your cart</p>
                    </div>
                    {shoppingCartComponents}
                    <div>
                        <h5 className="prices">Subtotal: ${price}</h5>
                        <h5 className="prices">Tax(8%): ${tax}</h5>
                        <h3 className="prices">Total: ${total}</h3>
                        <button type="button" className="btn btn-success btn-lg checkoutbutton mb-4" onClick={checkedOut}>Checkout
                        </button>
                    </div>
                </div>
            </Container>
            <Footer className="shpcartfoot"></Footer>
        </>
    )
}

export default ShoppingCart;