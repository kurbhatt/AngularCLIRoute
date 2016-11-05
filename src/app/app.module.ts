import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.route';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { RouteParam1Component } from './route-param-1/route-param-1.component';
import { RouteParam2Component } from './route-param-2/route-param-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ProductComponent,
    ServicesComponent,
    RouteParamComponent,
    RouteParam1Component,
    RouteParam2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
