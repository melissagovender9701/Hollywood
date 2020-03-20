import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  {path:'center', component:CenterComponent},
  {path:'countries/:id', component:CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
