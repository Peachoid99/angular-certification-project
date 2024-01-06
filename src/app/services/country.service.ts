import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  activatedEmitter = new BehaviorSubject<string>(null);
  
  constructor() { }
}
