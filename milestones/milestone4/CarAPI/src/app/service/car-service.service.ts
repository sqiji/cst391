import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {


  getCarById(id: number, callback: (cars: Car[])=>void) {
    this.http.get<Car[]>(this.host + "/cars?carId=" + id).
    subscribe((cars: Car[])=>{
      callback(cars);
    });
  }
  private host = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  public getCar(callback: (cars: Car[]) => void): void {
    this.http.get<Car[]>(this.host + "/cars")
      .subscribe((cars: Car[]) => {
        callback(cars);
    });
  }

  public createCar(car: Car, callback: () => void): void {
    this.http.post<Car>(this.host + "/cars", car).subscribe((data) => {
      callback();
    });
  }

  public updateCar(car: Car, callback: () => void): void {
    this.http.put<Car>(this.host + "/cars", car).subscribe((data) => {
      callback();
    });
  }

  public deleteCar(id: number, callback: () => void ): void {
    this.http.delete(this.host + "/cars/" + id).subscribe((data) => {
      callback();
    });
  }
}
