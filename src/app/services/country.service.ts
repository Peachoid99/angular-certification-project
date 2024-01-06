import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private selectedCountry: string = null;
  activatedEmitter = new BehaviorSubject<string>(null);
  
  constructor() { }

  setSelectedCountry(selectedCountry: string): void {
    this.selectedCountry = selectedCountry;
  }

  getSelectedCountry(): string {
    return this.selectedCountry;
  }
}
