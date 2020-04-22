
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CarService } from './../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  car$: Observable<Car>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CarService
  ) { }

  ngOnInit(): void {
    this.car$ =  this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.service.getCar(params.get('id')))
    );
  }

  gotoCars(car: Car) {
    let carId = car ? car.id : null;
    this.router.navigate(['/supercars', { id: carId, foo: 'foo' }]);
  }
}
