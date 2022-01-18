import React from 'react'
import "./cart.css";

const Items = ({ title, description, price, img, currency }) => {
    return (
        <>
            <div className="items-info">

                <div className="product-img">
                    <img src={img} alt='img' />
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                    <h3>{currency}</h3>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Items
