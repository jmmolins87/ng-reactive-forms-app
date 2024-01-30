import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'countries', 
    loadChildren: () => import('./country/countries.module').then(m => m.CountriesModule) 
  },
  { 
    path: '', 
    redirectTo: '/countries/selector', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
