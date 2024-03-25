import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String = "Car Show";
  version:String = "1.0";

  constructor(private router: Router){}

  displayVersion(){
    alert(this.version);
  };

  displayCartList(){
    console.log("displayCarList");
    this.router.navigate(['list-car'], { queryParams: { data: new Date()} });
  };
}
