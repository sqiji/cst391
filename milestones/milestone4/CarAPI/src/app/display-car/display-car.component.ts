import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../service/car-service.service';

import { Car } from '../models/car'

@Component({
  selector: 'app-display-car',
  templateUrl: './display-car.component.html',
  styleUrls: ['./display-car.component.css']
})
export class DisplayCarComponent {
  @Input() car?: Car;

	currentRoute: string = '';
  
	constructor(private route: ActivatedRoute, private service: CarServiceService) {
	  // Access route parameters
	  this.route.params.subscribe(params => {
		// Access the 'id' parameter
		let carId = parseInt(params['id']);
		console.log("carId: " + carId)
		// this.album = this.service.getAlbumById(albumId);
  
		this.service.getCarById(carId, (car: Car[])=>{
		  car: car[0];
		});
  
		console.log(this.car);
	  });
	}
}
