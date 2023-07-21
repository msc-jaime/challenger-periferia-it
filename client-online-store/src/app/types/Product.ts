export interface Product {
    id: string;
    name: string;
    price: string;
    totalQuantity: number;
    quantityCart?: number;
    totalSold: number;
    urlProductImage: string;
  }
  
  export class Products {
    "products": Product[]
  }