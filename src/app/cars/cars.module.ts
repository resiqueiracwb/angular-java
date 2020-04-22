import { CarsRoutingModule } from './cars-routing.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarListComponent } from './car-list/car-list.component';
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CarsRoutingModule
  ],
  declarations: [
    CarListComponent,
    CarDetailComponent
  ]
})
export class CarsModule {}