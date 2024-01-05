import { Component, OnDestroy, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Fixture } from '../../models/fixture.model';
import { FixtureResponse } from '../../models/fixture-response.model';

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrl: './team-fixtures.component.css'
})
export class TeamFixturesComponent implements OnInit, OnDestroy {
  fixtures: Fixture[];

  constructor(
    private footballApiService: FootballApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const teamId = params['id']

      this.footballApiService.getFixtures(teamId).subscribe(data => {
        this.fixtures = data;

        console.log(this.fixtures);
      });
    });
  }

  ngOnDestroy(): void {
    // TODO: Cancellare subscription nell'init
  }
}
