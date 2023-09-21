import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'detail/:id', loadComponent: () => import('./pages/detail/detail.component').then(c => c.DetailComponent)},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: NotFoundComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
