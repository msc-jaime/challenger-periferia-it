import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent, 
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
