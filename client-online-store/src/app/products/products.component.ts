import { Component, OnInit } from '@angular/core';
import { Products } from '../types/Product';
import { first } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!: Products;
  constructor(private productService: ProductService) {}

  isShowing: boolean = true;

  ngOnInit(): void { 
    this.productService.getAll()
      .pipe(first())
      .subscribe(products => { this.products = products; console.log(this.products)});
  }

  orderByTopSeller() {
    this.products['products'].sort( (a,b) => {
      return a.totalSold - b.totalSold;
    });
  }
  /*
  ngOnInit(): void {
    console.log("test");
    this.productsService.getAll()
      .pipe(first())
      .subscribe(products => { this.products = products; console.log(this.products)});
  }
  */
}
