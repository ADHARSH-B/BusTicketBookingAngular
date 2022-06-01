import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'admin-bus-details-add',
  templateUrl: './bus-details-add.component.html',
  styleUrls: ['./bus-details-add.component.css']
})
export class BusDetailsAddComponent implements OnInit {
  showBusAddForm!:boolean;
  addForm!:any;
  busDetails:any;
  loading=false;
  submitted:boolean=false;
  constructor(private adminService:AdminService, private uiService:UiServiceService,private route:ActivatedRoute,private router:Router
    ,private toast:ToastrService) {
    
    this.uiService.ontogglebusDetailsAddForm().subscribe(data=>{
     
      this.showBusAddForm=data
    });
    this.addForm=new FormGroup ({
            BusOperatorName:new FormControl(null,[Validators.required]),
            BoardingPoint:new FormControl(null,[Validators.required]),
            currentLocation:new FormControl(null,[Validators.required]),
            departureDate:new FormControl(null,[Validators.required]),
            DestinationPoint: new FormControl (null,[Validators.required]),
            totalSeats:new FormControl(null,[Validators.required]),
            SeatsBooked:new FormControl(null,[Validators.required]),
            seatType:new FormControl(null,[Validators.required]),
            // BusType:new FormControl(this.busDetails?.busType,[Validators.required]),
            DepartureTime:new FormControl(null,[Validators.required]),
            ArrivalTime:new FormControl(null,[Validators.required]),
            ArrivalDate:new FormControl(0,[Validators.required]),
            busType:new FormControl(null,[Validators.required]),
            price:new FormControl(null,[Validators.required])
            });     
  }
  ngOnInit(): void {
    
  }
  get addFormControl(){
    return this.addForm.controls
  }
  toggleAddBusFormView(){
    this.uiService.togglebusDetailsAddForm();
    // this.uiService.ontogglebusDetailsAddForm().subscribe(data=>console.log(data))
    // this.router.navigateByUrl('/admin-dashboard')
  }
  addBus(){
    this.submitted=true
    
    if(this.addForm.status=="INVALID"){
      this.toast.error("Please enter all the fields to add bus")
      return
    }
    this.loading=true
    this.adminService.addBus(this.addForm.value).subscribe(data=>{
      
      this.loading=false
      this.toast.success("Bus Added Success !!")
      // this.uiService.refreshRequired().next()
      this.uiService.togglebusDetailsAddForm()
    })
  }

}
