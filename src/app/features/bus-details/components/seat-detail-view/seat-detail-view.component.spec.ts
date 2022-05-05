import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatDetailViewComponent } from './seat-detail-view.component';

describe('SeatDetailViewComponent', () => {
  let component: SeatDetailViewComponent;
  let fixture: ComponentFixture<SeatDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
