import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:String = "My Music Collection";
  version:String = "1.0";

  constructor(private router: Router){}

  displayVersion(){
    alert(this.version);
  };

  displayArtistList(){
    console.log("displayArtistList");
    this.router.navigate(['list-artists'], { queryParams: { data: new Date()} });
  };
}
