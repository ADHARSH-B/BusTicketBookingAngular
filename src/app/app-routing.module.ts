import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './core/service/components/auth/authguard.guard';
const routes: Routes = [
  { 'path':'busDetails',loadChildren:()=>import('../app/features/bus-details/bus-details.module').then(
 d=> d.BusDetailsModule)},

 { path:'home',loadChildren:()=>import('./features/bus-search/bus-search.module')
   .then(d=> d.BusSearchModule)},
{ path:'bookingsDetails',loadChildren:()=>import('./features/bookings/bookings.module')
  .then(d=>d.BookingsModule),canActivate:[AuthguardGuard],data:['ADMIN']},
{path:'admin-dashboard',loadChildren:()=>import('./features/admin/admin.module').then(d=>d.AdminModule),canActivate:[AuthguardGuard]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
