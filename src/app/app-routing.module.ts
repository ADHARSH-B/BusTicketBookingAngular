import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { 'path':'busDetails',loadChildren:()=>import('../app/features/bus-details/bus-details.module').then(
   d=>{
     return d.BusDetailsModule
   }
 )},
 {
   path:'home',loadChildren:()=>import('./features/bus-search/bus-search.module').then(d=> d.BusSearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
