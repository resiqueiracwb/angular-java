import { Observable, of } from 'rxjs';
import { MessageService } from './../message.service';
import { Injectable } from '@angular/core';
import { CARS } from './mock-cars';
import { Car} from './car';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {

    this.messageService.add('CarService: fetched cars');
    return of (CARS);
  }

  getCar(id: number | string) {
    return this.getCars().pipe(
      map((cars: Car[]) => cars.find(car => car.id ===+id))
    );
  }
}
