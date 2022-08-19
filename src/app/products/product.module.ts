import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProtectRouteGuard } from '../protect-route.guard';
import { SharedModule } from '../shared/shared.module';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';
import { NewProductComponent } from './new-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacePipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent, pathMatch: 'full'},
      { path: 'new', component: NewProductComponent },
      { path: ':id', component: ProductDetailComponent, canActivate: [ProtectRouteGuard]}
    ])
  ],
  exports:[
    SharedModule
  ]
})
export class ProductModule { }
