import React from 'react';
import Card  from './Card';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const CarList = (props) => {

    const handleSelectionOne = (carId, uri) => {
        console.log('Seleted ID is ' + carId);
        props.onClick(carId, navigator, uri);
    };

    const handleDeleteCar = async (carId) => {
        console.log('Selected delete ID is ', carId);
        try {
            let response = await dataSource.delete('/cars/' + carId);
            console.log(response);
            console.log(response.data);
            window.location.reload(false);
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };


    console.log('props carList', props);
    const navigator = useNavigate();
    const cars = props.carList.map((car) => {
        return(
            <Card 
                key={car.carId}
                carId={car.carId}
                make={car.make}
                model={car.model}
                year={car.year}
                color={car.color}
                price={car.price}
                buttonText='OK'
                image={car.image}
                onClick={handleSelectionOne}
                onDelete={handleDeleteCar}
            />
        );
    });
    return <div className='container'>{cars}</div>
};

export default CarList;