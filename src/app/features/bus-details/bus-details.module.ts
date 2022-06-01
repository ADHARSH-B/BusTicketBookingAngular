import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusDetailsViewComponent } from './components/bus-details-view/bus-details-view.component';
import { SeatDetailViewComponent } from './components/seat-detail-view/seat-detail-view.component';
import { ToastrModule } from 'ngx-toastr';

// import { DateConverterPipePipe } from 'src/app/shared/components/pipes/date-converter-pipe.pipe';
import { ConfirmSeatsSummaryComponent } from './components/confirm-seats-summary/confirm-seats-summary.component';

import { RouterModule, Routes } from '@angular/router';
import { FormModule } from '../forms/form.module';


const routes: Routes = [
  { path: '', component: BusDetailsViewComponent }
];

@NgModule({
  declarations: [
    BusDetailsViewComponent,
    SeatDetailViewComponent,
    ConfirmSeatsSummaryComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastrModule .forRoot(),
    FormModule,
    SharedModule
    // DateConverterPipePipe
    // SpinnerCircularModule 
  ],
  exports:[
     BusDetailsViewComponent,
  
  ]
})
export class BusDetailsModule { }
