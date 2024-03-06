import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserLoginServiceService } from '../user-login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User;
  user1!:User;
  uname!:string;
  pwd!:string;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,private uService:UserLoginServiceService) { 
    this.user=new User();
    this.user1=new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.userLogin();    
  }

  again(){
    //this.router.navigate(['login']);
    window.location.reload();
    window.alert("Try again with correct User Id and password ");
    
  }

  addCustomer(){
    this.uService.addCustomer(this.user).subscribe(result=>this.router.navigate(['/user']));
    window.alert("User Added Succesfully")
    window.location.reload();
  }

  userLogin(){
    this.uService.userLogin(this.uname,this.pwd).subscribe((data: any) => {
      console.log(data)
      //this.uname=this.user1.name;
      //this.pwd=this.user1.password;
      this.user1 = data; //backend data 
  
      
     
     // console.log("user Id "+this.user.userId+" user_id = "+this.user_id+" password "+this.user.password+" pass ="+this.pass);
     if(this.user1.name==this.uname && this.user1.password==this.pwd){
        //window.alert("Login successful");
        this.router.navigate(['userProduct']); 
      }
      else{
        window.alert("Invalid Username or Password");
      }

      // else{
      //   
      //   window.location.reload();
      // }
      
      
    }, 
    error => console.log(error)
    );
  }

}
