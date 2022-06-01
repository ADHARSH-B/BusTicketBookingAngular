import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsEditComponent } from './user-details-edit/user-details-edit.component';
import { BusDetailsEditComponent } from './bus-details-edit/bus-details-edit.component';
import { BusDetailsAddComponent } from './bus-details-add/bus-details-add.component';
import { ToastrModule } from 'ngx-toastr';
import { PassengersComponent } from './passengers-details/passengers/passengers.component';
import { AddRoutesComponent } from './add-routes/add-routes.component';
import { ResetPasswordRequestComponent } from './reset-password-request/reset-password-request.component';


import { Routes, RouterModule } from '@angular/router';

// import { BusDetailsAddComponent } from './bus-details-add/bus-details-add.component';

const routes: Routes = [
  { path: 'resetpassword', component:ResetPasswordRequestComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    UserDetailsEditComponent,
    BusDetailsEditComponent,
    BusDetailsAddComponent,
    PassengersComponent,
    AddRoutesComponent,
    ResetPasswordRequestComponent,
   
    
    // BusDetailsAddComponent
  ],
  imports: [
     CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild(routes),
 
    // BrowserModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    UserDetailsEditComponent,
    PassengersComponent,
    BusDetailsEditComponent,
     BusDetailsAddComponent,
     AddRoutesComponent
  ]
})
export class FormModule { }
