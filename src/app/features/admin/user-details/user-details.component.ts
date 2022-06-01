import { ToastrService } from 'ngx-toastr';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-user-details-view',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private adminService:AdminService,private uiService:UiServiceService,private router:Router,
  private toast:ToastrService) {
    this.users=[]
   }
  users:any[]=[];
  storeUserDetails:[]=[];
  @Output() editFormClickEvent = new EventEmitter<Object>();
  canShowSidebar=true;
  loading=true;

  ngOnInit(): void {
    this.getAllUsers()
    
    this.uiService.toggleSideBar().subscribe(data=>this.canShowSidebar=data)
    this.uiService.refreshRequired().subscribe(()=>{
      this.getAllUsers()
    })

  }

  getAllUsers(){
    this.adminService.getAllUsers().subscribe(data=>{
      console.log(data)
      this.loading=false
      this.users=data;
      this.storeUserDetails=data
    })
  }
  fliterByUserName(value:any){
    console.log(value)
    if(value==""){
      this.users=this.storeUserDetails
      return
    }
   
    this.users=this.storeUserDetails.filter((data:any)=>{
      console.log(data)
      return data.userName.toUpperCase()==value.toUpperCase()
    })
  }
  togglingSidebar(){
    this.uiService.onToggleSidebar()
  }
  showEditDetailsForm(userId:any){
  //  console.log()
    this.router.navigateByUrl('/admin-dashboard/userdetails?userid='+userId)
    this.uiService.toggleuserDetailsEditForm();
  }
  deleteUser(id:any){
    this.adminService.deleteUser(id).subscribe(data=>{
      this.toast.success("user deletion success")
      console.log(data)
    })
  }

}
