import React, { useContext } from 'react';
import { CarContext } from '../../../App';
import Car from '../Car/Car';

const Cars = () => {
    const { cars } = useContext(CarContext)
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border border-red-600">
                {cars.map(car => <Car key={car.id} car={car}></Car>)}
            </div>
        </div>
    );
};

export default Cars;