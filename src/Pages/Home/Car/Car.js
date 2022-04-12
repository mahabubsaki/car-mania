import React, { useContext } from 'react';
import { CarContext } from '../../../App';

const Car = ({ car }) => {
    const { car_model, img, car_provider, description, price, rating, release_year, id } = car
    const { handleAddToCart } = useContext(CarContext)
    return (
        <div className="border border-gray-500 bg-card">
            <img src={img} alt="" className='w-full' />
            <h1 className="text-3xl" title={car_model}>{car_model.length > 20 ? car_model.slice(0, 14) + '...' : car_model}</h1>
            <p>Release Year : {release_year}</p>
            <p>price : {price}</p>
            <div className='flex justify-center bg-btn border border-gray-500 hover:bg-transparent'>
                <button className="p-2" onClick={() => handleAddToCart(id)}>Add to wishlist</button>
            </div>
        </div>
    );
};

export default Car;