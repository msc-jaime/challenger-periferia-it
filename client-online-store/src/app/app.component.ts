import { Component, Input } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberItemCart = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.evenEmitterAddRemoveItemCart.subscribe(
      numberItemCart => {
        console.log("EventEmitter", numberItemCart);
        this.numberItemCart = numberItemCart
      }
    ) 
  }

  isAuthenticated() {
    return false;
  }

  logout() {}
}
