import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from '../service/car-service.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {
  car: Car = new Car(0, '', '', 0, '', 0, '');
  wasSubmitted: boolean = false;

  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.deleteCar(this.car.carId, this.test);
    this.wasSubmitted = true;
  }

  test() {

  }
}
