import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct, IProductForm } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent{

  addProductSuccess= false;
  productResponse!: IProduct;

  constructor(private productService: ProductService,
              private router: Router){}

  @ViewChild(NgForm) frmNewProduct!: NgForm;

  newProduct: IProductForm = {
    productName: '',
    productCode: '',
    price: 0,
    starRating: 0
  };

  save(){
    if(this.frmNewProduct.valid){
      this.productService.addProduct(this.newProduct)
          .subscribe(
            (result) => this.handleResponse(result as IProduct)
          );
    }
  }

  handleResponse(result: IProduct){
    if(result.id){
      this.productResponse = result;
      this.addProductSuccess = true;
    }
  }
}
