import { Component, Input } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Input() numberItemCart: number = 0;
  cartCount$?;

  constructor(
    private cartService: CartService) {
      this.cartCount$ = this.cartService.cartCount$
    }

  ngOnInit(): void {
    //this.numberItemCart = this.cartService.getCartContentsCount();
    //this.numberItemsCart = this.cartService.numberItemsCart;
  }

  isAuthenticated() {
    //return this.authService.isAuthenticated;
    return false;
  }

  logout() {
    //this.authService.logout();
    //this.authService.logout();
  }
}
