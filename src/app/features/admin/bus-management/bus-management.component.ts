import { ToastrService } from 'ngx-toastr';
import { ignoreElements, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { BusServiceService } from 'src/app/core/service/components/bus/bus-service.service';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-bus-management',
  templateUrl: './bus-management.component.html',
  styleUrls: ['./bus-management.component.css']
})
export class BusManagementComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router,private uiService:UiServiceService,
    private toast:ToastrService) { 
      this.busDetails=[]
    }
  storeBusDetails:any[]=[];
  busDetails:any[]=[];
  canShowSidebar:boolean=true;
  canShowbackdrop=true;
  loading=true

  ngOnInit(): void {
    
    this.getAllBusDetails();
    this.uiService.toggleSideBar().subscribe(data=>{
      this.canShowSidebar=data
      
    })
    this.uiService.refreshRequired().subscribe(()=>{
      console.log("im in busdetails")
      this.getAllBusDetails();
    })
  
  }
  
  // canShowSideBar(){
  //   return window.innerWidth>500
  // }
  // canShowToggleIcon(){
  //   return window.innerWidth<=500
  // }
  fliterByBusName(event:any){
    if(event==""){
      this.busDetails=this.storeBusDetails
      return
    }
   
    this.busDetails=this.storeBusDetails.filter((data)=>{
      return data.busName.toUpperCase()==event.toUpperCase()
    })
  }
  
  getAllBusDetails(){
    
    this.adminService.getAllBusDetails().subscribe(data=>{
      this.loading=false
      this.busDetails=data
      this.storeBusDetails=data
    })
  }
  togglingSidebar(){
    this.uiService.onToggleSidebar();
  }
  addBus(){
    this.uiService.togglebusDetailsAddForm();
    this.uiService.ontogglebusDetailsAddForm().subscribe(()=>{
        this.uiService.refreshRequired().next()
    })
  }
  deleteBus(id:any){
    this.adminService.deleteBus(id).subscribe(
      {
        next:(response)=>{
          this.toast.success("bus deletion success");
          this.uiService.refreshRequired().next()
         },
         error:(response)=>{
           this.toast.error("bus deletion failed")
         },
         complete:()=>{
    
         } 
      }
    )
  }
  showBusEditDetailsForm(busId:any){
    
    this.router.navigateByUrl('/admin-dashboard/busdetails?busid='+busId)
    console.log("hey")
    this.uiService.togglebusDetailsEditForm()
    this.uiService.ontogglebusDetailsEditForm().subscribe(data=>{
      console.log(data)
    })
  }
  

}
