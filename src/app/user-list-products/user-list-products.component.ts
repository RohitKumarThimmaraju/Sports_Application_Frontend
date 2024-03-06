import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../cart';
import { CartServiceService } from '../cart-service.service';

import { ListProductServiceService } from '../list-product-service.service';
import { Payment } from '../payment';
import { Product } from '../product';

@Component({
  selector: 'app-user-list-products',
  templateUrl: './user-list-products.component.html',
  styleUrls: ['./user-list-products.component.css']
})
export class UserListProductsComponent implements OnInit {
  [x: string]: any;

  pdata:Product[]=[];
  searchedKeyword!: string;
  pid!:number;
  proIds:number[]=[];
  cart:Cart={
    cartId: 0,
    total: 0,
    payment: new Payment,
    products: []
  };

  
  @Input()
  product!: Product;

  constructor(private pService:ListProductServiceService, private cService:CartServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  append(){
    
    this.proIds.push(this.pid);
    console.log(this.proIds);
  }

  getProIds(){
    this.cService.getProIds(this.proIds).subscribe(proIds=>this.proIds);
    console.log("ok");
  }

  addProduct(){
    this.cService.addProduct(this.cart, this.proIds).subscribe();
    console.log("ok 1");
  }

  getAllProducts(){
    this.pService.getAllProducts().subscribe(pdata=>this.pdata=pdata);
  }

  getProductsByLowToHigh(){
    this.pService.getProductsByLowToHigh().subscribe(pdata=>this.pdata=pdata);
  }

  getProductsByHighToLow(){
    this.pService.getProductsByHighToLow().subscribe(pdata=>this.pdata=pdata);
  }
  logout(){
    window.alert("Logged Out Successfully");
    this.router.navigate(['/menu']);

  }

}
