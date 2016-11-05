import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { RouteParam1Component } from  './route-param-1/route-param-1.component';
import { RouteParam2Component } from  './route-param-2/route-param-2.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', component: ProductComponent },
      { path: 'services', component: ServicesComponent }
    ]
  },
  {
    path: 'route-param',
    component: RouteParamComponent,
    children: [
      { path: '', component: RouteParam1Component },
      { path: 'item/:id', component: RouteParam2Component }
    ]
  }
];
