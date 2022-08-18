import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IProduct } from './product';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class ProductService {


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }

  get(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
}
