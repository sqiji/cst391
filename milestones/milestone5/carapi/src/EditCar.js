import React, { useState } from 'react';
import dataSourse from './dataSource';
import { useNavigate } from 'react-router-dom';


const EditCar = (props) => {
    let car = {
        make: '',
        model: '',
        year: '',
        color: '',
        price: '',
        image: '',
    };
    let newCarCreation = true;

    if(props.car) {
        car = props.car;
        newCarCreation = false;
    }

    const [make, setCarMake] = useState(car.make || "");
    const [model, setCarModel] = useState(car.model || "");
    const [year, setCarYear] = useState(car.year || "");
    const [color, setCarColor] = useState(car.color || "");
    const [price, setCarPrice] = useState(car.price || "");
    const [image, setCarImage] = useState(car.image || "");

    
    const navigate = useNavigate();

    const updateMake = (event) => {
        setCarMake(event.target.value);
    };
    const updateModel = (event) => {
        setCarModel(event.target.value);
    };
    const updateYear = (event) => {
        setCarYear(event.target.value);
    };
    const updateColor = (event) => {
        setCarColor(event.target.value);
    };
    const updatePrice = (event) => {
        setCarPrice(event.target.value);
    };
    const updateImage = (event) => {
        setCarImage(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        const editedCar = {
            carId: car.carId,
            make: make,
            model: model,
            year: year,
            color: color,
            price: price,
            image: image,
        };
        console.log(car);
        saveCar(editedCar);
    };

    const saveCar = async (car) => {
        let response;
        if(newCarCreation)
            response = await dataSourse.post('/cars', car);
        else
            response = await dataSourse.put('/cars', car);
        console.log(response);
        console.log(response.data);
        props.onEditCar(navigate);
    };

    const handleCancle = () => {
        navigate("/")
    }

    

    return (
        <div className='container'>
            <form onSubmit={handleFormSubmit}>
                <h1>{newCarCreation ? "Create New" : "Edit"}  Car</h1>
                <div className="form-group">
                    <label htmlForfor="carMake">Make</label>
                    <input type="text" className="form-control" id="carMake" placeholder="Make" value={make} onChange={updateMake}  />
                </div>
                <div className="form-group">
                    <label htmlForfor="carModel">Model</label>
                    <input type="text" className="form-control" id="carModel" placeholder="Model" value={model} onChange={updateModel}  />
                </div>
                <div className="form-group">
                    <label htmlForfor="carYear">Year</label>
                    <input type="text" className="form-control" id="carYear" placeholder="Year" value={year} onChange={updateYear}  />
                </div>
                <div className="form-group">    
                    <label htmlForfor="carColor">Color</label>
                    <input type="text" className="form-control" id="carColor" placeholder="Color" value={color} onChange={updateColor}  />
                </div>
                <div className="form-group">    
                    <label htmlForfor="carPrice">Price</label>
                    <input type="text" className="form-control currency" step={0.01} id="carPrice" placeholder="Price" value={price} onChange={updatePrice}  />
                </div>
                <div className="form-group">
                    <label htmlForfor="carImage">Image</label>
                    <input type="text" className="form-control" id="carImage" placeholder="Image" value={image} onChange={updateImage}  />
                    <img style={{widows:150, height:150}} src={image} alt={`${props.carModel}`} onChange={updateImage}/>
                </div>
                <div style={{margin: 10}}>
                    <button style={{marginRight: 5}} type="button" className="btn btn-secondary" onClick={handleCancle}>Cancel</button>
                    <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </form> 
        </div>
    );
};

export default EditCar;