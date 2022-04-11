import React, { useContext } from 'react';
import { CarContext } from '../../../App';

const Services = () => {
    const [cars, setCars] = useContext(CarContext)
    return (
        <div>
            {cars.map(car => <img src={car.img} alt={car.car_code} />)}
        </div>
    );
};

export default Services;