import { Component, EventEmitter, Output } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.css'
})
export class CountrySelectorComponent {
  @Output() standingsVisibilityChange = new EventEmitter<void>();

  constructor(private countryService: CountryService) {}

  onSelectCountry(country: string) {
    this.standingsVisibilityChange.emit();
    this.countryService.activatedEmitter.next(country);
  }
}
