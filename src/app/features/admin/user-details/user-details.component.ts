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

  constructor(private adminService:AdminService,private uiService:UiServiceService,private router:Router) { }
  users:any;
  @Output() editFormClickEvent = new EventEmitter<Object>();

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(data=>{
      console.log(data)
      this.users=data;
    })
  }
  showEditDetailsForm(userId:any){
  //  console.log()
    this.router.navigateByUrl(this.router.url+'?userid='+userId)
    this.uiService.toggleuserDetailsEditForm();
  }
  deleteUser(id:any){
    this.adminService.deleteUser(id).subscribe(data=>{
      console.log(data)
    })
  }

}
