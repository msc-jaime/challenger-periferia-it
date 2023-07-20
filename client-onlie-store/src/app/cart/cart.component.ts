import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    //this.numberItemCart = this.cartService.getCartContentsCount();
    
  }

  getCart() {
    //return this.carts;
    return this.cartService.get();
  }

  removeFromCart(id: string) {
    return this.cartService.remove(id);
  }
}
