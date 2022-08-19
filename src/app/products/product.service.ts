import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_URL } from '../settings';
import { IProduct, IProductForm } from './product';
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

  addProduct(p: IProductForm): Observable<IProduct>{
    return this.http.post<IProduct>(BASE_URL + '/products', p);  
  }
}
