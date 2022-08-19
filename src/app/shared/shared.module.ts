import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './star.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';

@NgModule({
  declarations: [
    StarComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports:[
    CommonModule, FormsModule, 
    HttpClientModule, StarComponent, 
    PageNotFoundComponent
  ]
})
export class SharedModule { }
