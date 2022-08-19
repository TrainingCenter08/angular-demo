import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct, IProductForm } from './product';
import { BASE_URL } from '../settings';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(BASE_URL + '/products');
  }

  get(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${BASE_URL}/products/${id}`);
  }

  addProduct(product: IProductForm): Observable<Object>{
    return this.http.post(BASE_URL + '/products', product)
  }
}
