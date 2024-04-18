import React from 'react';
import { useNavigate } from "react-router-dom";

const OneCar = (props) => {
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate(`/edit/${props.car.id}`);
    };
    return(
        <div className='container'>
            <h2>Car Details for {props.car.model}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <img src={props.car.image} className='card-img-top' alt={props.car.model}/>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.car.make} {props.car.model}</h5>
                            <p className='card-text'>Year: {props.car.year}</p>
                            <p className='card-text'>Color: {props.car.Color}</p>
                            <p className='card-text'>Price: {props.car.Price}</p>
                            <p className='card-text'>Image: {props.car.image}</p>
                            <button onClick={handleEditClick} className="btn btn-Warnning">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCar;