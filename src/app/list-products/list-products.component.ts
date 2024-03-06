import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListProductServiceService } from '../list-product-service.service';
import { Product } from '../product';
import $ from 'jquery';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  [x: string]: any;
  pdata:Product[]=[];
  searchedKeyword!: string;
  
  @Input()
  product!: Product;

  @Output()
  productDeletedEvent = new EventEmitter();

  constructor(private pService:ListProductServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  deleteProduct(id: number) {
    if (confirm("Do you want to delete this product?") == true){
      this.pService.deleteProduct(id).subscribe(
        pdata => {
          this.getAllProducts();
        }
      )
    }
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
