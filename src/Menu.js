import React from "react";
import MenuCards from "./MenuCards"
import Footer from "./Footer";

function Menu({menuData}) {
    return (
        <>  
            <MenuCards menuData={menuData}></MenuCards>
            <Footer></Footer>
        </>
    )
}

export default Menu;