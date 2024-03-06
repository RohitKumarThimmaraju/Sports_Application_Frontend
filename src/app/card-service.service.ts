import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  cardUrl!:string;
  constructor(private http:HttpClient) { 
    this.cardUrl="http://localhost:8086/payment";
  }

  public addCard(card : Card) {
    return this.http.post<Card>(this.cardUrl+"/addCard", card);
  }
}
