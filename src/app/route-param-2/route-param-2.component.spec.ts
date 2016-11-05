/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteParam2Component } from './route-param-2.component';

describe('RouteParam2Component', () => {
  let component: RouteParam2Component;
  let fixture: ComponentFixture<RouteParam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
