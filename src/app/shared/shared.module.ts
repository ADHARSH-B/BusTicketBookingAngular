import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { DateConverterPipePipe } from './components/pipes/date-converter-pipe.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    // DateConverterPipePipe,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    // DateConverterPipePipe,
  ]
  
})
export class SharedModule { }
