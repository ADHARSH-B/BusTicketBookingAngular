import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BusManagementComponent } from './bus-management/bus-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormModule } from '../forms/form.module';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent},
  // { path: 'userdetailsview', component:BusManagementComponent},
  // {path:'userdetails',component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    BusManagementComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormModule
  ],
  exports:[
    AdminDashboardComponent,
  ]
})
export class AdminModule { }
