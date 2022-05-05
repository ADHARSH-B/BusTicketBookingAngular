import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSeatsSummaryComponent } from './confirm-seats-summary.component';

describe('ConfirmSeatsSummaryComponent', () => {
  let component: ConfirmSeatsSummaryComponent;
  let fixture: ComponentFixture<ConfirmSeatsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSeatsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSeatsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
