import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars$: Observable<Car[]>;
  selectedId: number;

  constructor(
    private service: CarService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cars$ = this.route.paramMap.pipe(
      switchMap(params =>{
        this.selectedId = +params.get('id');
        return this.service.getCars();
      })
    );
  }

}
