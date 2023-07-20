import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Products } from '@app/types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<Products>(`${environment.apiUrl}/products`);
  }
}
