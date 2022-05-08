import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailsEditComponent } from './bus-details-edit.component';

describe('BusDetailsEditComponent', () => {
  let component: BusDetailsEditComponent;
  let fixture: ComponentFixture<BusDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
