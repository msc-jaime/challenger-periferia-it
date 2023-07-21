import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  numberItemCart = 0;
  shippingCost = 8000;
  subtotal = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void { 
    this.cartService.getSubtotal();
    this.numberItemCart = this.cartService.numberItemCart;
    this.subtotal = this.cartService.subtotal;
    this.total = this.shippingCost + this.subtotal
  }

  getCart() {
    return this.cartService.get();
  }

  removeFromCart(id: string) {
    return this.cartService.remove(id);
  }
}
