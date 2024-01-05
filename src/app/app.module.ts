import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './components/country-selector/country-selector.component';
import { LeagueStandingsComponent } from './components/league-standings/league-standings.component';
import { TeamFixturesComponent } from './components/team-fixtures/team-fixtures.component';
import { HttpClientModule } from '@angular/common/http';
import { StandingItemComponent } from './components/standing-item/standing-item.component';
import { RouterModule, Routes } from '@angular/router';
import { FixtureItemComponent } from './components/fixture-item/fixture-item.component';

const appRoutes: Routes = [
  { path: 'team/:id', component: TeamFixturesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    LeagueStandingsComponent,
    TeamFixturesComponent,
    StandingItemComponent,
    FixtureItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
