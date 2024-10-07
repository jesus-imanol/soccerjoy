import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerHourComponent } from './card-player-hour.component';

describe('CardPlayerHourComponent', () => {
  let component: CardPlayerHourComponent;
  let fixture: ComponentFixture<CardPlayerHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPlayerHourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
