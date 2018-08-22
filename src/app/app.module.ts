import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ApiDataService } from './service/api-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
