import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { BusServiceService } from 'src/app/core/service/components/bus/bus-service.service';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';


@Component({
  selector: 'app-bus-management',
  templateUrl: './bus-management.component.html',
  styleUrls: ['./bus-management.component.css']
})
export class BusManagementComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router,private uiService:UiServiceService) { }
  busDetails:any;
  
  ngOnInit(): void {
    this.adminService.getAllBusDetails().subscribe(data=>{
      this.busDetails=data
      console.log(data)
    })
  }
  addBus(){
    this.uiService.togglebusDetailsAddForm();
    this.uiService.ontogglebusDetailsAddForm().subscribe(data=>console.log(data))
  }
  showBusEditDetailsForm(busId:any){
    
    this.router.navigateByUrl(this.router.url+'?busid='+busId)
    console.log("hey")
    this.uiService.togglebusDetailsEditForm()
    this.uiService.ontogglebusDetailsEditForm().subscribe(data=>{
      console.log(data)
    })
  }
  

}
