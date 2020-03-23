import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RightSideNavComponent } from './right-side-nav/right-side-nav.component';
import { RouterModule } from '@angular/router';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CenterComponent } from './center/center.component';
import { CountriesComponent } from './countries/countries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TournamentComponent } from './tournament/tournament.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    RightSideNavComponent,
    LeftSideNavComponent,
    FooterComponent,
    CenterComponent,
    CountriesComponent,
    DashboardComponent,
    TournamentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
