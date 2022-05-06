import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusDetailsViewComponent } from './components/bus-details-view/bus-details-view.component';
import { SeatDetailViewComponent } from './components/seat-detail-view/seat-detail-view.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { ConfirmSeatsSummaryComponent } from './components/confirm-seats-summary/confirm-seats-summary.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BusDetailsViewComponent }
];

@NgModule({
  declarations: [
    BusDetailsViewComponent,
    SeatDetailViewComponent,
    ConfirmSeatsSummaryComponent,
    PassengerDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SpinnersAngularModule 
  ],
  exports:[
    BusDetailsViewComponent,
    PassengerDetailsComponent,
  ]
})
export class BusDetailsModule { }
