import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {} as Product;


  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    console.log(this.cartService.get());
    this.cartService.add(this.product);

    this.cartService.evenEmitterAddRemoveItemCart.emit(this.cartService.numberItemCart)
  }

  removeFromCart() {
    this.cartService.remove(this.product.id);
  }
}
