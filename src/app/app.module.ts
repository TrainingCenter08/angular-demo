import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { route } from './routes';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ContentComponent } from './content.component';
import { ProtectRouteGuard } from './protect-route.guard';
import { ProductService } from './products/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewProductComponent } from './products/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    FooterComponent,
    ConvertToSpacePipe,
    StarComponent,
    HomeComponent,
    ProductDetailComponent,
    ContentComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(route, { useHash: false })
  ],
  providers: [{provide: ProductService, useClass: ProductService}, ProtectRouteGuard],
  bootstrap: [NavbarComponent, ContentComponent, FooterComponent]
})
export class AppModule { }
