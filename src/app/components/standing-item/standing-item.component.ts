import { Component, Input, OnInit } from '@angular/core';
import { Standing } from '../../models/standing.model';

@Component({
  selector: '[app-standing-item]',
  templateUrl: './standing-item.component.html',
  styleUrl: './standing-item.component.css'
})
export class StandingItemComponent implements OnInit{
  @Input() standing: Standing;

  ngOnInit(): void {
    
  }

}
