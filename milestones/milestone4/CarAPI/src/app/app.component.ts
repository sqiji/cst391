import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Show';
  version = "1.0";

  constructor(private router: Router) {

  }

  public displayVersion() {
    alert(" Version: " + this.version);
  }

  public displayCarList() {
    this.router.navigate(['list'], { queryParams: { data: new Date() } });
  }
}
