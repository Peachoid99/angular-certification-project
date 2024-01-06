import { Component, OnDestroy, OnInit } from '@angular/core';
import { FootballApiService } from '../../services/football-api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Fixture } from '../../models/fixture.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrl: './team-fixtures.component.css'
})
export class TeamFixturesComponent implements OnInit, OnDestroy {
  fixtures: Fixture[];
  leagueId: number;
  private footballApiSubscription: Subscription;

  constructor(
    private footballApiService: FootballApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const teamId = params['id']

      this.footballApiSubscription = this.footballApiService.getFixtures(teamId).subscribe(data => {
        this.fixtures = data;
        this.leagueId = this.fixtures[0].league.id;
      });
    });
  }

  ngOnDestroy(): void {
    this.footballApiSubscription.unsubscribe();
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
