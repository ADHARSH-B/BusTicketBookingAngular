import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'admin-bus-details-edit',
  templateUrl: './bus-details-edit.component.html',
  styleUrls: ['./bus-details-edit.component.css']
})
export class BusDetailsEditComponent implements OnInit {
  showBusEditForm!:boolean;
  editForm!:any;
  busDetails:any;
  loading=false
  constructor(private adminService:AdminService, private uiService:UiServiceService,private route:ActivatedRoute,private router:Router
    ,private toast:ToastrService) { 
    this.uiService.ontogglebusDetailsEditForm().subscribe(data=>this.showBusEditForm=data)
    this.route.queryParams.subscribe(data=>{
      if(data["busid"]!=undefined){
        console.log(data)
        this.adminService.getBusDetails(data["busid"]).subscribe(user=>{
          console.log(user)
          this.busDetails=user
          this.editForm=new FormGroup ({
            BusOperatorName:new FormControl(this.busDetails?.busName,[Validators.required]),
            BoardingPoint:new FormControl(this.busDetails?.boardingPoint,[Validators.required]),
            DestinationPoint: new FormControl (this.busDetails?.destinationPoint,[Validators.required]),
            totalSeats:new FormControl(this.busDetails?.totalSeats,[Validators.required]),
            SeatsBooked:new FormControl(this.busDetails?.seatsBooked,[Validators.required]),
            seatType:new FormControl(this.busDetails?.busSeats[0].seatType,[Validators.required]),
            // BusType:new FormControl(this.busDetails?.busType,[Validators.required]),
            DepartureTime:new FormControl(this.busDetails?.departureTime,[Validators.required]),
            ArrivalDate:new FormControl(this.busDetails?.arrivalDate,[Validators.required]),
            DepartureDate:new FormControl(this.busDetails?.departureDate,[Validators.required]),
            ArrivalTime:new FormControl(this.busDetails?.arrivalTime,[Validators.required]),
            AddSeats:new FormControl(0,[Validators.required]),
            busType:new FormControl(this.busDetails?.busType,[Validators.required]),
            price:new FormControl(this.busDetails?.price,[Validators.required])
            });
        })
        
      }})
  }

  ngOnInit(): void {
  }

  toggleFormView(){
    this.uiService.togglebusDetailsEditForm();
    
  }
  updateForm(busid:any){
    this.loading=true
    this.adminService.updateBusDetails(busid,this.editForm.value).subscribe({
      next:data=>{
        // 
        
        this.toast.success("Bus Details Updation Success!")
        this.loading=false
        this.uiService.togglebusDetailsEditForm();
        // setTimeout(()=>{
        //   this.uiService.refreshRequired().next()
        // })
        
        // console.log("updating done")
        // this.router.navigate(['/admin-dashboard'])
      },
      error:data=>{
        this.loading=false
        this.uiService.togglebusDetailsEditForm();
        if(data.error.message){
          this.toast.error("Please Add Route !! "+data.error.message+" :(")
          // this.toast.error("Please Add Route")
          return
        }
        this.loading=false
        this.uiService.togglebusDetailsEditForm();
        this.toast.error("Route Updation Failed")

      }
    })
  }
  
  }



