import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor() { }

  getCurrentSeason(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
  
    const startSeasonMonth = 7; // If season starts in August
    let seasonStartYear: number;
  
    if (currentMonth >= startSeasonMonth) {
      seasonStartYear = currentYear;
    } else {
      seasonStartYear = currentYear - 1;
    }
  
    return seasonStartYear.toString();
  }
}
