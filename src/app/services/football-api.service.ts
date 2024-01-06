import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StandingResponse } from '../models/standing-response.model';
import { FixtureResponse } from '../models/fixture-response.model';
import { Fixture } from '../models/fixture.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  readonly countryLeaguesInfo = {
    'england': { name: 'Premier League', id: '39' },
    'spain': { name: 'La Liga', id: '140' },
    'germany': { name: 'Bundesliga', id: '78' },
    'france': { name: 'Ligue 1', id: '61' },
    'italy': { name: 'Serie A', id: '135' }
  };

  constructor(private http: HttpClient) { }

  getStandings(leagueId: string, season: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('league', leagueId);
    searchParams = searchParams.append('season', season);

    return this.http
    .get<StandingResponse>('https://v3.football.api-sports.io/standings', {
      headers: new HttpHeaders({
        'x-rapidapi-key': environment.footballApiKey
      }),
      params: searchParams
    })
    .pipe(
      map(response => response.response[0].league.standings[0])
    );
  }

  getFixtures(teamId: string) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('team', teamId);
    searchParams = searchParams.append('last', '10');

    return this.http
    .get<FixtureResponse>('https://v3.football.api-sports.io/fixtures', {
      headers: new HttpHeaders({
        'x-rapidapi-key': environment.footballApiKey
      }),
      params: searchParams
    })
    .pipe(
      map(response => response.response )
    );
  }

  getCountryByLeagueId(leagueId: string): string | null {
    for (const country in this.countryLeaguesInfo) {
      if (this.countryLeaguesInfo[country].id === leagueId) {
        return country;
      }
    }
    return null;
  }
}
