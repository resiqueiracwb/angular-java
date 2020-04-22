import { CarHomeComponent } from './car-home/car-home.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const carsRoutes: Routes = [
  { path: 'routing-home', component: CarHomeComponent },
  { path: 'cars', redirectTo: '/supercars'  },
  { path: 'supercars', component: CarListComponent, data: { animation: 'cars' } },
  { path: 'car/:id', redirectTo: '/supercar/:id' },
  { path: 'supercar/:id', component: CarDetailComponent, data: { animation: 'car' } }
];

@NgModule({
    imports: [
      RouterModule.forChild(carsRoutes)
    ],
    exports: [
      RouterModule
    ]
  })

  
  export class CarsRoutingModule {}