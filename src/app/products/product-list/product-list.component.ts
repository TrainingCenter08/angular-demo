import { AfterViewInit, Component, importProvidersFrom, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StarComponent } from 'src/app/shared/star.component';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2021",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "assets/images/leaf_rake.png"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.png"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2021",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "assets/images/saw.png"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2020",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "assets/images/xbox-controller.png"
    }
  ];

  imageWith = 40;
  imageMargin = 2;
  isShowImage = true;

  filteredProduct: IProduct[] = this.products;

  @ViewChildren(StarComponent) 
  children!: QueryList<StarComponent>;

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
