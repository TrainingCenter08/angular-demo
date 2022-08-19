import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  sub: Subscription | undefined;
  selectedProduct: IProduct | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.get(id)
        .subscribe(
          (product: IProduct) => this.selectedProduct = product
        );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  back(): void{
    this.router.navigate(['/products'])
  }

}
