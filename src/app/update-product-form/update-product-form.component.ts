import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListProductServiceService } from '../list-product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {
  product:Product={
    productName: '',
    category: '',
    description: '',
    brand: '',
    mrp: 0,
    productId: 0,
    
  };
  constructor(private pService: ListProductServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params.id);
  }

  getProduct(id: number): void {
    this.pService.getProduct(id)
      .subscribe(
        data => {
          this.product= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {

    this.pService.updateProduct(this.product.productId, this.product)
      .subscribe(
        result=>this.goToProductList(),
        error => {
          console.log(error);
        });
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }

}
