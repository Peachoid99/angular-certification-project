import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingItemComponent } from './standing-item.component';

describe('StandingItemComponent', () => {
  let component: StandingItemComponent;
  let fixture: ComponentFixture<StandingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StandingItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
