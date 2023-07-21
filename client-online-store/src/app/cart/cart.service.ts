import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../types/Product';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Array<Product> = [];
  numberItemCart: number = 0;
  subtotal: number = 0;
  @Output() evenEmitterAddRemoveItemCart: EventEmitter<number> = new EventEmitter();

  constructor() {}

  add(product: Product) {
    const item = this.products.filter((item) => item.id === product.id);
    if (item.length  === 0){
      product.quantityCart = 1;
      this.products.push(product);
    }else{
      this.products.forEach(item => {
        if(item.id == product.id) {
          item.quantityCart = (item.quantityCart || 0) + 1;
        }
      })
    }
    console.log(this.products);

    this.numberItemCart = this.products.length;
  }

  get() {
    return this.products;
  }

  getSubtotal() {
    this.products.forEach(product => this.subtotal += (product.quantityCart || 0) * parseInt(product.price))
    console.log(this.subtotal);
    return this.subtotal;
  }

  remove(id: String) {
    this.products = this.products.filter((product) => product.id != id);
    this.numberItemCart = this.products.length;
  }
}
