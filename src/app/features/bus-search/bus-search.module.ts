import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component:BusSearchComponent }
];

@NgModule({
  declarations: [
    BusSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    BusSearchComponent
  ]
})
export class BusSearchModule { }
