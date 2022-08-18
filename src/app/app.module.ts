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
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(route, { useHash: false })
  ],
  providers: [],
  bootstrap: [NavbarComponent, ContentComponent, FooterComponent]
})
export class AppModule { }
