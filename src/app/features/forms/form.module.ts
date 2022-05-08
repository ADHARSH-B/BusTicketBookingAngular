import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { BusDetailsEditComponent } from './bus-details-edit/bus-details-edit.component';
import { BusDetailsAddComponent } from './bus-details-add/bus-details-add.component';
// import { BusDetailsAddComponent } from './bus-details-add/bus-details-add.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UserDetailsEditComponent,
    BusDetailsEditComponent,
    BusDetailsAddComponent,
    // BusDetailsAddComponent
  ],
  imports: [
     CommonModule,
    FormsModule,
    // BrowserModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    UserDetailsEditComponent,
    BusDetailsEditComponent,
     BusDetailsAddComponent
  ]
})
export class FormModule { }
