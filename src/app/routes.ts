import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ProductDetailComponent } from "./products/product-detail/product-detail.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

export const route: Routes = [
    { path: 'products', component: ProductListComponent, pathMatch: 'prefix'},
    { path: 'products/:id', component: ProductDetailComponent},
    { path: 'welcome', component: HomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ]