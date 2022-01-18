import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './Cart';
import { coupons } from './coupons';
import { getAllSum } from './utility';

const CartTotal = () => {

    const item = useContext(CartContext)

    let [total, setTotal] = useState(0)
    let [discount, setDiscount] = useState(0)
    const [coupon, setCoupon] = useState(null)

    useEffect(() => {
        let totalPrice = getAllSum(item)
        setTotal(totalPrice)
    }, [])

    function showAlert(e) {
        e.preventDefault();
        alert(`Make a payment of Rs ${total}`)
    }
    function getCouponVal(e) {
        e.preventDefault();
        const { value } = e.target;
        setCoupon(value)
    }
    function applyCoupon(e) {
        let discount = 0
        let couponValue = coupons.filter(item => item.name === coupon);
        if (couponValue.length === 0) {
            alert("Invalid Coupon")
        }
        discount = couponValue.length === 0 ? 0 : parseInt(couponValue[0]?.value)
        setDiscount(discount)

    }

    return (
        <>

            <h3>
                cart total: <span> {discount > 0 ? (total - discount) : total}₹ </span>
            </h3>


            <div>
                <input type="text" value={coupon} name='coupon' onChange={getCouponVal} style={{ 'padding': '8px' }} placeholder='Coupon' />
                <button onClick={applyCoupon}>Apply Coupon</button></div>
            <button onClick={showAlert}>CheckOut</button>

        </>
    )
}

export default CartTotal
