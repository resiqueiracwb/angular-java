import { slideInAnimation } from './../../animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.scss'],
  animations: [ slideInAnimation ]
})
export class CarHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
