import React from 'react';

const CartItem = ({ item }) => {
    const { price, car_model, quantity } = item;
    return (
        <div className="bg-yellow-200 mb-2">
            <p>{car_model}</p>
            <p>price : {price}</p>
            <p>{quantity}</p>
        </div>
    );
};

export default CartItem;