import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { CountriesComponent } from './countries/countries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentComponent } from './tournament/tournament.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path:'center', component:CenterComponent},
  {path:'countries/:id', component:CountriesComponent},
  {path:'tournament/:sportid/:countryid', component:TournamentComponent},
  {path:'event/:tournamentId', component:EventComponent},
  {path:'', redirectTo: '/center', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
