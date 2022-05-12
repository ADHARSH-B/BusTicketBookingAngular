import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { BusManagementComponent } from './bus-management/bus-management.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormModule } from '../forms/form.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BusRouteDetailsComponent } from './bus-route/bus-route-details/bus-route-details.component';


const routes: Routes = [
  { path: '', component: AdminDashboardComponent},

  {path:"busdetails",component:BusManagementComponent},
  // { path: 'userdetailsview', component:BusManagementComponent},
   {path:'userdetails',component:UserDetailsComponent},
   {path:"routeDetails",component:BusRouteDetailsComponent}
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    BusManagementComponent,
    UserDetailsComponent,
    SidenavComponent,
    BusRouteDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormModule
  ],
  exports:[
    RouterModule
  ],
  // bootstrap: [AdminDashboardComponent]
})
export class AdminModule { }
