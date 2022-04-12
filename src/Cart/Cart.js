import React, { useContext } from 'react';
import { CarContext } from '../App';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, handleRemoveAll } = useContext(CarContext)
    let quantity = 0
    let eachPrice;
    let price = 0;
    for (let item of cart) {
        console.log(item);
        quantity += item.quantity
        eachPrice = item.price * item.quantity
        price += eachPrice
    }
    return (
        <div>
            <h1>total items in cart {quantity}</h1>
            <h1>total price {price}</h1>
            <button onClick={handleRemoveAll}>Clear</button>
            {
                cart.map(item => <CartItem key={item.id} item={item}></CartItem>)
            }
        </div>
    );
};

export default Cart;