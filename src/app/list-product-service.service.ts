import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ListProductServiceService {
  productUrl!:string;
  constructor(private http:HttpClient) { 
    this.productUrl="http://localhost:8086/product";
  }

  public save(product : Product) {
    return this.http.post<Product>(this.productUrl+"/add", product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.productUrl}/delete/${id}`, {responseType: 'text'});
  }

  updateProduct(id: any, data: any): Observable<any> {
    return this.http.put(`${this.productUrl}/update/${id}`, data);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.productUrl}/id/${id}`);
  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl+"/all");
  }

  getProductsByLowToHigh():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl+"/low");
  }

  getProductsByHighToLow():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl+"/high");
  }

}
