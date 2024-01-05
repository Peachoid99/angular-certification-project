import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  showLeagueStandings = new Subject<boolean>();
  activatedEmitter = new Subject<string>();
  
  constructor() { }
}
