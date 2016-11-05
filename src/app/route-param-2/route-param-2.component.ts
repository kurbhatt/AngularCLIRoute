import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-param-2',
  template: `<h3>Route Param Id: {{id}}</h3>`
})
export class RouteParam2Component implements OnInit {

  id: any;
  paramsSub:  any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

}
