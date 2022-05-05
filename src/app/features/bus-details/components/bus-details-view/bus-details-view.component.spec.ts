import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailsViewComponent } from './bus-details-view.component';

describe('BusDetailsViewComponent', () => {
  let component: BusDetailsViewComponent;
  let fixture: ComponentFixture<BusDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
