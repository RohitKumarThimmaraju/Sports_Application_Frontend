import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProductServiceService } from '../list-product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,private productService:ListProductServiceService) { 
    this.product=new Product();
  }


  onSubmit(){
    this.productService.save(this.product).subscribe(result=>this.goToProductList());
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }
  

  ngOnInit(): void {
  }

}
