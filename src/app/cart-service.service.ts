import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartUrl!:string;
  constructor(private http:HttpClient) { 
    this.cartUrl="http://localhost:8086/cart";
  }  

  getProIds(proIds:number[]):Observable<number[]>{
    return this.http.post<number[]>(this.cartUrl+"/proids", proIds);
  }

  addProduct(cart:Cart, proIds:number[]){
    return this.http.post<Cart>(this.cartUrl+"/addproduct", cart);
  }
}
