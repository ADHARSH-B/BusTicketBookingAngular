import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusDetailsViewComponent } from './components/bus-details-view/bus-details-view.component';
import { SeatDetailViewComponent } from './components/seat-detail-view/seat-detail-view.component';

import { ConfirmSeatsSummaryComponent } from './components/confirm-seats-summary/confirm-seats-summary.component';



@NgModule({
  declarations: [
    BusDetailsViewComponent,
    SeatDetailViewComponent,
    ConfirmSeatsSummaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BusDetailsViewComponent,
  ]
})
export class BusDetailsModule { }
