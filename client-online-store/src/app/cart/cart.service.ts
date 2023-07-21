import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../types/Product';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  product: Array<Product> = [];
  numberItemCart: number = 0;
  @Output() evenEmitterAddRemoveItemCart: EventEmitter<number> = new EventEmitter();

  constructor() {}

  add(product: Product) {
    this.product.push(product);
    this.numberItemCart = this.product.length;
  }

  get() {
    return this.product;
  }

  remove(id: String) {
    this.product = this.product.filter((product) => product.id != id);
    this.numberItemCart = this.product.length;
  }
}
