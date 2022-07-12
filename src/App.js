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
  const [reviews, setReviews] = useState([])
  const [cartItems, setCartItems] = useState([])
  const numberOfItems = cartItems.reduce((total, item) => (total + item.quantity),0) 

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
    .then((r) => r.json())
    .then((allReviews) => {
        setReviews(allReviews)})
  },[])
  
  function addToCart(id) {
    const selectedItem = cartItems.find((item) => item.id === id)
    if (selectedItem) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {...item, quantity: item.quantity+1}
        }
        else {
          return item
        }
      })
      setCartItems(newCartItems)
    } 
    else {
      const newCartItem = menuData.find((item) => item.id === id)
      newCartItem.quantity = 1
      const newCartItems = [...cartItems, newCartItem]
      setCartItems(newCartItems)
    }
  }

  function removeFromCart(id) {
    const selectedItem = cartItems.find((item) => item.id === id)

    if (selectedItem.quantity > 1) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return {...item, quantity: item.quantity-1}
        }
        else {
          return item
        }
      })
      setCartItems(newCartItems)
    } 
    else {
      const newCartItems = cartItems.filter((item) => item.id !== id)
      setCartItems(newCartItems)
    }
  }

  return (
    <>
    <Navbar numberOfItems={numberOfItems}/>
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu menuData={menuData} cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews} setReviews={setReviews}/>
        </Route>
        <Route exact path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} numberOfItems={numberOfItems} removeFromCart={removeFromCart}/>
        </Route>
      </Switch>
    </Container>
    </>
  );
}

export default App;
