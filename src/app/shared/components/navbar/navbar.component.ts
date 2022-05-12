import  jwt_decode  from 'jwt-decode';
import { AuthServiceService } from './../../../core/service/components/auth/auth-service.service';
import { UiServiceService } from '../../../core/service/components/ui/ui-service.service'
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAdmin:boolean=false;
  isLoggenIn:boolean=false;
  displayToggle:boolean=true
  constructor(private uiService:UiServiceService,private authService:AuthServiceService
    ,private toast:ToastrService,private router:Router) {
    console.log("entered")
    this.uiService.toggleIsAdminLoggenIn().subscribe(data=>{
      this.isAdmin=data
    })
    this.uiService.toggleIsLoggenIn().subscribe(data=> {
      console.log('logged in ',data)
      this.isLoggenIn=data
    })

  }

  ngOnInit(): void {
   if(localStorage.getItem("authtoken"))
   this.isLoggenIn=true 
   this.uiService.onToggleIsAdminLoggenIn()
    
  console.log(this.uiService)
  }
  hamburgerTogglehandler(){
    this.displayToggle=!this.displayToggle;
  }
  loginFormToggleHandler(){
     this.uiService.toggleShowSigninForm()
     window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  logoutFormToggleHandler(){
    if(this.isAdmin){
      this.isAdmin=false
    }
    this.uiService.ontoggleIsLoggenIn()
    localStorage.removeItem("authtoken")
    this.toast.error("Logged out!")
    return this.router.navigateByUrl("/home")

  }

}
