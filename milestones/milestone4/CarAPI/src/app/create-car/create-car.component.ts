import { Component } from '@angular/core';
import { CarServiceService } from '../service/car-service.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  car: Car = new Car(Math.floor(Math.random() * 1000000), '', '', '', '', '');

  wasSubmitted: boolean = false;

  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {

    this.service.createCar(this.car, ()=>{
      console.log("Created Car");
      });
    
      this.wasSubmitted = true;
  

    // this.service.createCar(this.car, this.test);
    // console.log('The return from createPrayer() was ' + status);
    // this.wasSubmitted = true;
  }

}
