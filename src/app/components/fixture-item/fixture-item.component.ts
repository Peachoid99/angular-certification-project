import { Component, Input, OnInit } from '@angular/core';
import { Fixture } from '../../models/fixture.model';

@Component({
  selector: '[app-fixture-item]',
  templateUrl: './fixture-item.component.html',
  styleUrl: './fixture-item.component.css'
})
export class FixtureItemComponent {
  @Input() fixture: Fixture;
}
