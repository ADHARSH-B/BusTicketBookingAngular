import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthguardGuard } from './core/service/components/auth/authguard.guard';
import {AdminRouteGuardGuard} from './core/service/components/auth/admin-guard/admin-route-guard.guard'
const routes: Routes = [
  { 'path':'busDetails',loadChildren:()=>import('../app/features/bus-details/bus-details.module').then(
 d=> d.BusDetailsModule)},

 { path:'home',loadChildren:()=>import('./features/bus-search/bus-search.module')
   .then(d=> d.BusSearchModule)},

{ path:'bookingsDetails',loadChildren:()=>import('./features/bookings/bookings.module')
  .then(d=>d.BookingsModule),canActivate:[AuthguardGuard],data:['ADMIN']},
 {path:'admin-dashboard',loadChildren:()=>import('./features/admin/admin.module')
.then(d=>d.AdminModule),canActivate:[AdminRouteGuardGuard]}, 
{path:'admin-dashboard',loadChildren:()=>import('./features/admin/admin.module').then(d=>d.AdminModule),canActivate:[AuthguardGuard]}
,
{ 'path':'**',redirectTo:"home",pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
