import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FootballApiService } from '../../services/football-api.service';
import { Standing } from '../../models/standing.model';
import { SeasonService } from '../../services/season.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrl: './league-standings.component.css'
})
export class LeagueStandingsComponent implements OnInit, OnDestroy {
  standings: Standing[];
  private countrySubscription: Subscription;

  constructor(
    private countryService: CountryService, 
    private footballApiService: FootballApiService,
    private seasonService: SeasonService
  ) {}
  
  ngOnInit(): void {
    this.countrySubscription = this.countryService.activatedEmitter.subscribe((country: string) => {
      this.countryService.setSelectedCountry(country);
      const leagueId = this.footballApiService.countryLeaguesInfo[country].id;
      const season = this.seasonService.getCurrentSeason();

      this.footballApiService.getStandings(leagueId, season).subscribe(data => {
        this.standings = data;
      });
    });
  }

  ngOnDestroy(): void {
    this.countrySubscription.unsubscribe();
  }
}


