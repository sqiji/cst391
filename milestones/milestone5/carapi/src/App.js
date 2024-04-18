import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchCar from './SearchCar.js';
import NavBar from './NavBar.js';
import EditCar from './EditCar.js';
import OneCar from './OneCar.js';
import './App.css';
import dataSource from "./dataSource.js";
import CarList from './CarList.js';


const App = (props) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [carList, setCarList] = useState([]);
    const [currentlySelectedCarId, setCurrentlySelectedCarId] = useState(0);

    let refresh = false;

    const loadCars = async () => {
        const response = await dataSource.get('/cars');
        setCarList(response.data);
    }

    useEffect(() => {
        loadCars();
    }, [refresh]);

    const updateSearchResults = (phrase) => {
        console.log('phrase is ' + phrase);
        setSearchPhrase(phrase);
    };

    const updateSingleCar = (carId, navigate, uri) => {
        console.log('Update Single car = ', carId);
        console.log('Update Single car = ', navigate);
        var indexNumber = 0;
        for (var i = 0; i < carList.length; ++i) {
            if (carList[i].carId === carId) indexNumber = i;
        }
        setCurrentlySelectedCarId(indexNumber);
        let path = uri + carId;
        console.log('path =' + path);
        navigate(path);
    };

    console.log('carList', carList);
    const renderedList = carList.filter((car) => {
        if (
            car.make.toLowerCase().includes(searchPhrase.toLowerCase()) || 
            car.model.toLowerCase().includes(searchPhrase.toLowerCase()) ||
            car.year.includes(searchPhrase) ||
            searchPhrase === ''
        ) {
            return true;
        }
        return false;
    });
    console.log('renderedList', renderedList)

    const onEditCar = (navigate) => {
        loadCars();
        navigate("/");
    }


    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SearchCar
                            updateSearchResults={updateSearchResults}
                            carList={renderedList}
                            updateSingleCar={updateSingleCar}
                        />
                    }
                />
                <Route exact path='/new' element={<EditCar onEditCar={onEditCar} />} />
                <Route exact path='/edit/:carId' element={<EditCar onEditCar={onEditCar} car={carList[currentlySelectedCarId]}/>} />
                <Route
                    exact
                    path='/show/:carId'
                    element={<OneCar car={carList[currentlySelectedCarId]} />}
                />
                 <Route
                    exact
                    path='/'
                    element={
                        <CarList
                            carList={carList}
                            setCarList={setCarList}
                            onClick={updateSingleCar} /> }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;