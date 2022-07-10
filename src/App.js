import "./App.css";
import {React, useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Reviews from "./Reviews";
import ShoppingCart from "./ShoppingCart"

function App() {
  return (
    <>
    <Navbar/>
    <Container fluid className="removepadding">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/menu">
          <Menu/>
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
