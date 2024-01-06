import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showCountrySelector = true;
  showLeagueStandings = false;
  initialState = true;

  title = 'angular-certification-project';

  showStandings(): void {
    this.initialState = false;
    this.showLeagueStandings = true;
  }

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.url.startsWith('/team/')) {
        this.showCountrySelector = false;
        this.showLeagueStandings = false;
      } else {
        if(!this.initialState) {
          this.showCountrySelector = true;
          this.showLeagueStandings = true;
        }
      }
    });
  }
}
