import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FootballApiService } from '../../services/football-api.service';
import { Standing } from '../../models/standing.model';
import { SeasonService } from '../../services/season.service';

@Component({
  selector: 'app-league-standings',
  templateUrl: './league-standings.component.html',
  styleUrl: './league-standings.component.css'
})
export class LeagueStandingsComponent implements OnInit, OnDestroy {
  standings: Standing[];

  constructor(
    private countryService: CountryService, 
    private footballApiService: FootballApiService,
    private seasonService: SeasonService
  ) {}
  
  ngOnInit(): void {
    this.countryService.activatedEmitter.subscribe((country: string) => {
      const leagueId = this.footballApiService.countryLeaguesInfo[country].id;
      const season = this.seasonService.getCurrentSeason();

      this.footballApiService.getStandings(leagueId, season).subscribe(data => {
        this.standings = data;
      });
    });
  }

  ngOnDestroy(): void {
    // TODO: Cancellare subscription nell'init
  }
}


