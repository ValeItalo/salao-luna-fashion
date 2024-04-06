import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './shared/card/card.component';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
