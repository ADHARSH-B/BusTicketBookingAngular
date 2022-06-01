import { AdminService } from '../../../core/service/components/admin/admin.service'
import { Subject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'admin-user-details-edit',
  templateUrl: './user-details-edit.component.html',
  styleUrls: ['./user-details-edit.component.css']
})
export class UserDetailsEditComponent implements OnInit {
  showUserEditForm!:boolean;
  @Input() canShow!:any;
  editForm:any;
  userDetails:any;
  loading=false
  constructor(private uiService:UiServiceService,private route:ActivatedRoute,private router:Router,
    private adminService:AdminService,private toast:ToastrService) { 
    
    this.uiService.ontoggleuserDetailsEditForm().subscribe(data=>this.showUserEditForm=data)
    this.route.queryParams.subscribe(data=>{
      if(data["userid"]!=undefined){
        console.log(data)
        // this.uiService.refreshBusDetails().subscribe({
        //   next:(response)=>{
            
        //    }
        // })
        this.adminService.getUser(data["userid"]).subscribe(user=>{
          console.log("fetched",user)
          this.userDetails=user
          this.editForm=new FormGroup ({
            email:new FormControl(this.userDetails?.email,[Validators.required]),
            name:new FormControl(this.userDetails?.name,[Validators.required]),
            userName: new FormControl (this.userDetails?.userName,[Validators.required]),
            role:new FormControl(this.userDetails?.roles[0].name,[Validators.required])
            });
        })
      }})
  }

  ngOnInit(): void {
    

  }

  updateForm(){
    this.loading=true
    this.adminService.updateUser(this.userDetails?.id,this.editForm.get('userName').value,
    this.editForm.get('name').value,this.editForm.get('role').value,this.editForm.get("email").value).subscribe(data=>{
     this.loading=false
      this.toast.success("User Updation Success")
      this.uiService.refreshRequired().next()
      this.uiService.toggleuserDetailsEditForm();
    })
  }
  toggleFormView(){
    this.uiService.toggleuserDetailsEditForm();
    this.uiService.ontoggleuserDetailsEditForm().subscribe(data=>{
      
      if(data){
        console.log('form opened')
      }
    });
    // this.router.navigateByUrl('/admin-dashboard')
  }

}


