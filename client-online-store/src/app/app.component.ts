import { Component, Input } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberItemCart: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.evenEmitterAddRemoveItemCart.subscribe(
      numberItemCart => (this.numberItemCart = numberItemCart)
    ) 
  }

  isAuthenticated() {
    return false;
  }

  isEmptyCart() {
    return this.numberItemCart == 0 ? true: false;
  }

  logout() {}
}
