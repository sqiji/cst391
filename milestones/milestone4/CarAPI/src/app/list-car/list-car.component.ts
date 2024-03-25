import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent {

  selectedCar: Car| null = null;
  cars: Car[] = [];
  constructor(private route: ActivatedRoute, private service: CarServiceService) { }

  ngOnInit() {
    console.log("Getting data ....");
    this.service.getCars((cars: Car[]) => {
      this.cars = cars;
      console.log('this.cars', this.cars);
      for (let i = 0; i < cars.length; i++) {
        this.cars[i].Make = String(Object.values(cars[i]));
      }
    });
  }
}
