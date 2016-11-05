/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouteParam1Component } from './route-param-1.component';

describe('RouteParam1Component', () => {
  let component: RouteParam1Component;
  let fixture: ComponentFixture<RouteParam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
