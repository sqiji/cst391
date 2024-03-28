import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

const routes: Routes = [
  { path: 'create', component: CreateCarComponent },
  { path: 'list', component: ListCarComponent },
  { path: 'edit', component: EditCarComponent },
  { path: 'delete', component: DeleteCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
