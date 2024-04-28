import { Component, NgModule, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit{
  car: Car = new Car(Math.floor(Math.random() * 1000000), '', '', 0, '', 0, '');
  wasSubmitted: boolean = false;

  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.createCar(this.car, this.test);
    this.wasSubmitted = true;
  }

  test() {

  }
}
