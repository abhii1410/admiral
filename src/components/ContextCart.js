import React, { useContext } from 'react'
import Items from './Items';
import "./cart.css";
import { CartContext } from './Cart';
import CartTotal from './CartTotal';
const ContextCart = () => {

    const item = useContext(CartContext)

    return (
        <>

            <div className="cart-items">

                <div className="cart-items-container">
                    {
                        item.map((currItem, index) => {
                            return <Items keys={currItem.id} {...currItem} />
                        })
                    }

                </div>

            </div>

            <div className="card-total">
                <CartTotal />
            </div>
        </>
    )
}

export default ContextCart
