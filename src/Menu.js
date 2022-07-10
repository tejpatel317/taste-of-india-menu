import React from "react";
import MenuCards from "./MenuCards"
import Footer from "./Footer";

function Menu({menuData, addToCart, cartItems}) {
    return (
        <>  
            <MenuCards menuData={menuData} addToCart={addToCart} cartItems={cartItems}></MenuCards>
            <Footer></Footer>
        </>
    )
}

export default Menu;