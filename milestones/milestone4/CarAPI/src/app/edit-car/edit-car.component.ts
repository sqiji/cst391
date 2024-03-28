import { Component } from '@angular/core';
import { Car } from '../models/car';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent {
  car: Car = new Car(0, '', '', 0, '', '');
  wasSubmitted: boolean = false;

  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.updateCar(this.car, this.test);
    console.log('The return from updateCar() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
