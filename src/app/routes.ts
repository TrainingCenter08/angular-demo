import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";

export const route: Routes = [
    { path: 'welcome', component: HomeComponent},
    { path: 'products', 
    loadChildren: () => import('./products/product.module')
                              .then(m => m.ProductModule) },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
  ];

export const routeModule = RouterModule.forRoot(route, {useHash: false});