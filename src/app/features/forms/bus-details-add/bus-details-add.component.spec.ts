import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailsAddComponent } from './bus-details-add.component';

describe('BusDetailsAddComponent', () => {
  let component: BusDetailsAddComponent;
  let fixture: ComponentFixture<BusDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
