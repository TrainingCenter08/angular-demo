import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ContentComponent } from './content.component';
import { ProtectRouteGuard } from './protect-route.guard';
import { ProductService } from './products/product.service';
import { SharedModule } from './shared/shared.module';
import { routeModule } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,routeModule
  ],
  providers: [{provide: ProductService, useClass: ProductService}, ProtectRouteGuard],
  bootstrap: [NavbarComponent, ContentComponent, FooterComponent]
})
export class AppModule { }
