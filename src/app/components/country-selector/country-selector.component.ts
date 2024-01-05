import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css'
})
export class CountrySelectorComponent {
  constructor(private countryService: CountryService) {}

  onSelectCountry(country: string) {
    this.countryService.showLeagueStandings.next(true);
    this.countryService.activatedEmitter.next(country);
  }
}
