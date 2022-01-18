import React, { createContext } from 'react'

import "./cart.css";
import { products } from "./product";
import ContextCart from './ContextCart';

export const CartContext = createContext();

const Cart = () => {

  return (
    <>
      <CartContext.Provider value={products}>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{3} </span>
            items in shopping cart
          </p>
          <ContextCart />

        </section>
      </CartContext.Provider>
    </>
  )
}

export default Cart
