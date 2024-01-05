import { Component } from '@angular/core';
import { CountryService } from './services/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showLeagueStandings = false;
  title = 'angular-certification-project';

  constructor(private countryService: CountryService) {
    this.countryService.showLeagueStandings.subscribe((visibility: boolean) => {
      this.showLeagueStandings = visibility;
    });
  }
}
