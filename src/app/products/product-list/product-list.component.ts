import { AfterViewInit, Component, importProvidersFrom, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarComponent } from 'src/app/shared/star.component';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  products: IProduct[] = [];

  imageWith = 40;
  imageMargin = 2;
  isShowImage = true;

  filteredProduct: IProduct[] = [];

  @ViewChildren(StarComponent) 
  children!: QueryList<StarComponent>;

  sub: Subscription | undefined;

  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.sub = this.productService.getAllProducts()
        .subscribe(
          (products) => {
            this.products = products;
            this.filteredProduct = this.products;
          }
        );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  vote(i: number){
    this.children.get(i)?.ratingClicked();
  }

  private _searchText: string = '';
  get searchText():string {
    return this._searchText;
  }
  set searchText(value: string){
    this._searchText = value;
    this.filteredProduct = this.performFilter(value);
  }

  // TODO: Move this method to product service
  performFilter(value: string){
    if(!value) return this.products;
    return this.products.filter(p => p.productName.toLowerCase().includes(value.toLowerCase()));
  }

  toggleImage(){
    this.isShowImage = !this.isShowImage;
  }


  getPriceLevel(p: IProduct) : object{
    let cssClass = {'high-price': false, 'low-price': false};
    if (p.price > 20){
      cssClass['high-price'] = true;
    }else{
      cssClass['low-price'] = true;
    }
    return cssClass
  }

  getFontSize(p: IProduct){
    let style = {'font-size': 'auto'};
    if(p.productName.length > 8)
      style['font-size'] = '10px';
    return style;
  }

  onRating(newStarRating: number, i: number){
    this.products[i].starRating = newStarRating;
  }

}
