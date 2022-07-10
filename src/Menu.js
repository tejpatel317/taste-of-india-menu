import React from "react";
import MenuCards from "./MenuCards"
import Footer from "./Footer";

function Menu({menuData, addToCart, removeFromCart, cartItems}) {
    return (
        <>  
            <MenuCards menuData={menuData} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems}></MenuCards>
            <Footer></Footer>
        </>
    )
}

export default Menu;