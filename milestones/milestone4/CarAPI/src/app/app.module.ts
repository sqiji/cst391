import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCarComponent } from './list-car/list-car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayCarComponent } from './display-car/display-car.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCarComponent,
    CreateCarComponent,
    EditCarComponent,
    DeleteCarComponent,
    DisplayCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
