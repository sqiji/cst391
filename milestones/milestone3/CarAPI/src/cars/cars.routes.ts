import { Router } from 'express';
import * as CarsController from './cars.controller';

const router = Router();
router
    .route('/cars')
    .get(CarsController.readCars);

router
    .route('/cars/search/make/:search')
    .get(CarsController.searchCarsByMake);

router
    .route('/cars/search/model/:search')
    .get(CarsController.searchCarsByModel);

router
    .route('/cars')
    .post(CarsController.createNewCar);


router
    .route('/cars')
    .put(CarsController.updateCar);



router
    .route('/cars/:carId')
    .delete(CarsController.deleteCar);


export default router;