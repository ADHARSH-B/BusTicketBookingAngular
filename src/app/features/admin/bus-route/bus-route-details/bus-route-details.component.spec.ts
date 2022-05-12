import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteDetailsComponent } from './bus-route-details.component';

describe('BusRouteDetailsComponent', () => {
  let component: BusRouteDetailsComponent;
  let fixture: ComponentFixture<BusRouteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRouteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
