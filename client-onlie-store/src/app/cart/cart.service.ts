import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Array<Product> = [];

  private cartCount = new ReplaySubject<number>(1);
  cartCount$ = this.cartCount.asObservable();
  setCartCount(count: number) {
    // encapsulate with logic to set local storage
    localStorage.setItem("cart_count", JSON.stringify(count));
    this.cartCount.next(count);
  }

  constructor() {}

  add(product: Product) {
    this.product.push(product);
  }

  get() {
    return this.product;
  }

  remove(id: String) {
    this.product = this.product.filter((product) => product.id != id);
  }
}
