import {React} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import FoodItem from "./FoodItem";

function MenuCards({menuData, addToCart, cartItems}) {


    const menuDataComponents = menuData.map((menuItem) => {
        return (<Col key={menuItem.id} className="col-md-4 p-3"><FoodItem menuItem={menuItem} addToCart={addToCart} cartItems={cartItems}/></Col>)
      })

    return (
      <Container>
        <Row>
          {menuDataComponents}
        </Row>
      </Container>
    )
}

export default MenuCards;