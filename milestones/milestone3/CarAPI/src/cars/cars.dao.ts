import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Car } from "./cars.model";
import { carQueries } from './cars.queries';


export const readCars = async () => {
    return execute<Car[]>(carQueries.readCars, []);
};


export const searchCarsByMake = async (search: string) => {
    console.log('search param', search);
    return execute<Car[]>(carQueries.searchCarsByMake, [search]);
};

export const searchCarsByModel = async (search: string) => {
    console.log('search param', search);
    return execute<Car[]>(carQueries.searchCarsByModel, [search]);
};

export const readCarsByCarID = async (carId: number) => {
    return execute<Car[]>(carQueries.readCarsByCarID, [carId]);
};

export const createNewCar = async (car: Car) => {
    return execute<OkPacket>(carQueries.createNewCar,
        [car.make, car.model, car.year, car.color, car.image]);
};

export const updateCar = async (car: Car) => {
    return execute<OkPacket>(carQueries.updateCar,
        [car.make, car.model, car.year, car.color, car.image, car.carId]);
};

export const deleteCar = async (carId: number) => {
    return execute<OkPacket>(carQueries.deleteCar, [carId]);
};
