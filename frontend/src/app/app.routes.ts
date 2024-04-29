import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login Page' },
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Home Details' },
];
