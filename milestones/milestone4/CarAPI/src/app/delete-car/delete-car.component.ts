import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService} from '../service/car-service.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit{

  constructor(private route: ActivatedRoute, private service: CarServiceService) {  }

  ngOnInit()
  {
    
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
    this.service.deleteCar(id, () => {
            console.log("The return from deleteCar() was " + status);
        });
  }

}
