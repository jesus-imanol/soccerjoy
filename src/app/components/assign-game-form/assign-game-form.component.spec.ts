import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignGameFormComponent } from './assign-game-form.component';

describe('AssignGameFormComponent', () => {
  let component: AssignGameFormComponent;
  let fixture: ComponentFixture<AssignGameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignGameFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignGameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
