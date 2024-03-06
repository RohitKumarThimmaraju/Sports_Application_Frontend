import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
  userUrl!:string;
  custUrl!:string;

  constructor(private http:HttpClient) { 
    this.custUrl="http://localhost:8086/customer";
    this.userUrl="http://localhost:8086/user";
  }

  public addCustomer(user : User) {
    return this.http.post<User>(this.custUrl+"/add", user);
  }

  userLogin(username:string, password:string ) : Observable<Object>  
  {   
      return this.http.get(`${this.userUrl}/login/${username}/${password}`);  
  }  
}
