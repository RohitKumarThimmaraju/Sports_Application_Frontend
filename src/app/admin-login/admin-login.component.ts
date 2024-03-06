import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin;
  uname!:string;
  password!:string;

  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.admin=new Admin();
  }

  ngOnInit(): void {
  }
clickedMe(){
  if(this.uname==this.admin.username && this.password==this.admin.password){
    window.alert("Login Successful");
    this.router.navigate(['/product']);
  }
  else{
    window.alert("Invalid Username or Password");
  }
} 

}
