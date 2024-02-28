import { Request, RequestHandler, Response } from 'express';
import * as CarDao from '../cars/cars.dao';
import { OkPacket } from 'mysql';

export const readCars: RequestHandler = async (req: Request, res: Response) => {
    try {
        let cars;
        let carId = parseInt(req.query.carId as string);

        console.log('carId', carId);
        if (Number.isNaN(carId)) {
            cars = await CarDao.readCars();
            
        } else {
            cars = await CarDao.readCarsByCarID(carId);
        }
        
        res.status(200).json(
            cars
        );
    } catch (error) {
        console.error('[cars.controller][readCars][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching cars'
        });
    }
};

export const searchCarsByMake: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const cars = await CarDao.searchCarsByMake('%' + req.params.search + '%');

        res.status(200).json(cars);
    } catch (error) {
        console.error('[cars.controller][readCars][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching cars'
        });
    }
};

export const searchCarsByModel: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const cars = await CarDao.searchCarsByModel('%' + req.params.search + '%');

        res.status(200).json(cars);
    } catch (error) {
        console.error('[cars.controller][readCars][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching cars'
        });
    }
};

export const createNewCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CarDao.createNewCar(req.body);

        console.log('req.body', req.body);
        console.log('car', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[cars.controller][createNewCar][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing cars'
        });
    }
};

export const updateCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CarDao.updateCar(req.body);

        console.log('req.body', req.body);
        console.log('car', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[cars.controller][updateCar][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating cars'
        });
    }
};

export const deleteCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        let carId = parseInt(req.params.carId as string);
        console.log('carID', carId);

        if (!Number.isNaN(carId)) {
            const response = await CarDao.deleteCar(carId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for carId");
        }

    } catch (error) {
        console.error('[cars.controller][deleteCar][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting cars'
        });
    }
};




