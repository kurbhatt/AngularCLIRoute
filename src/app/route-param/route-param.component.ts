import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-param',
  template: `
      <h2>Route Param</h2>
      <a [routerLink]="['/route-param']">Home</a>
      <a [routerLink]="['/route-param/item', 1]">Route Param 1</a>
      <a [routerLink]="['/route-param/item', 2]">Route Param 2</a>
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
    `
})
export class RouteParamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
