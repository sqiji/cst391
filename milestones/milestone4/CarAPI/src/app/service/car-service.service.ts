import { Injectable } from '@angular/core';
import exampledata  from '../../data/sample-car-data.json';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';


/**
 * The below class is used to send data correctly to the angular application's webpage to display.
 * this is where we would normally hook up API calls to retrieve data from a real database.
 */
@Injectable({ providedIn: 'root' }) //  inject at the root level of the Angular application
export class CarServiceService {

  cars: Car[] = exampledata;

  private host = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  public getCars(callback: (cars: Car[])=> void): void  {
    this.http.get<Car[]>(this.host + "/cars").
      subscribe((cars: Car[]) =>{
        callback(cars);
      });
  }

  
  public createCar(car: Car, callback: ()=> void): void {
    this.http.post<Car[]>(this.host + "/cars/", car).
    subscribe((data) =>{
      callback();
    });
  }

  public updateCar(car: Car, callback: ()=> void): void {
    this.http.put<Car[]>(this.host + "/cars/", car).
    subscribe((data) =>{
      callback();
    });
  }

  public deleteCar(id: number, callback: ()=> void): void {
    this.http.delete(this.host + "/cars/" + id).
    subscribe((data) =>{
      callback();
    });
  }

  public getCarById(id: number, callback: (cars: Car[])=>void){
    this.http.get<Car[]>(this.host + "/cars?carID=" + id).
    subscribe((cars: Car[])=>{
      callback(cars);
    });
  }

}
