import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NewProductComponent } from "./products/new-product.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProtectRouteGuard } from "./protect-route.guard";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

export const route: Routes = [
    { path: 'products', component: ProductListComponent, pathMatch: 'prefix'},
    { path: 'products/new', component: NewProductComponent},
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProtectRouteGuard]},
    { path: 'welcome', component: HomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ]