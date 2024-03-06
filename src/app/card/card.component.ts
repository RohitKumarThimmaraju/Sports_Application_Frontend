import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card';
import { CardServiceService } from '../card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card!:Card;
  month:string="";
  year:string="";

  constructor(private route: ActivatedRoute, private router: Router,private cardService:CardServiceService) { }

  ngOnInit(): void {
    this.card=new Card();
    
  }

  reload(){
    window.location.reload();
  }

  addCard(){
    this.card.cardExpiry=this.month+"-"+this.year;
    this.cardService.addCard(this.card).subscribe(result=>this.router.navigate(['/user']));
  }

}
