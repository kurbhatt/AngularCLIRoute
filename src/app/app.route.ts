import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

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
  }
];
