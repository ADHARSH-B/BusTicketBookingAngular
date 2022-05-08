import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsViewComponent } from './bookings-view/bookings-view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BookingsViewComponent}
];

@NgModule({
  declarations: [
    BookingsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BookingsModule { }
