import "./App.css";
import {React, useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Reviews from "./Reviews";
import ShoppingCart from "./ShoppingCart";
import menuData from "./Menudata";

function App() {

  const [cartItems, setCartItems] = useState([])
  const numberOfItems = cartItems.reduce((total, item) => (total + item.quantity),0) 
  

  return (
    <>
    <Navbar/>
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu menuData={menuData}/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        <Route exact path="/shoppingcart">
          <ShoppingCart/>
        </Route>
      </Switch>
    </Container>
    </>
  );
}

export default App;
