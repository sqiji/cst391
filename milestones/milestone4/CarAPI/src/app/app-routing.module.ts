import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { ListCarComponent } from './list-car/list-car.component';
//import { DisplayCarComponent } from './display-car/display-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';


const routes: Routes = [
	{ path: 'create', component: CreateCarComponent },
	{ path: 'delete', component: DeleteCarComponent },
	//{ path: 'display/:id', component: DisplayCarComponent },
	{ path: 'edit', component: EditCarComponent },
	{ path: 'list-car', component: ListCarComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
