import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { AdminDashboardComponent } from '../../admin/admin-dashboard/admin-dashboard.component';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-routes',
  templateUrl: './add-routes.component.html',
  styleUrls: ['./add-routes.component.css']
})
export class AddRoutesComponent implements OnInit {

  showAddRouteForm:boolean=false
  stations:String[]=[];
  loading=false
  addRouteForm:any
  constructor(private uiService:UiServiceService,private adminService:AdminService,
    private toast:ToastrService) {
    this.uiService.toggleAddStation().subscribe(data=>{
      console.log("hey iam called",data)
      this.showAddRouteForm=data
    })
   }

  ngOnInit(): void {
    this.addRouteForm=new FormGroup ({
      BoardingPoint: new FormControl (null),
      DestinationPoint: new FormControl(null),
      Station: new FormControl(null)
    })
   
  }
  addStation(){
    console.log(this.addRouteForm.value["Station"])
    if(!this.stations.includes(this.addRouteForm.value["Station"]))
           this.stations.push(this.addRouteForm.value["Station"])
  }
  addRoute(){
    let routeDetails={
      boardingPoint:this.addRouteForm.value["BoardingPoint"],
      destinationPoint:this.addRouteForm.value["DestinationPoint"],
       stations:this.stations
    }
    console.log(this.stations)
    console.log(routeDetails)
    this.loading=true
    this.adminService.addRoute(routeDetails).subscribe(data=>{
      this.toast.success("Routes Added")
      this.loading=false
      this.uiService.refreshRequired().next()
      this.uiService.ontoggleAddStation()
    })
  }
  toggleAddBusFormView(){
    this.uiService.ontoggleAddStation()
  }
}
