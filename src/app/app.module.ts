import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ApiDataService } from './service/api-data.service';
import { LineItemComponent } from './shoppingcart/line-item/line-item.component';
import { TransactionsComponent } from './shoppingcart/transactions/transactions.component';
import { OrderSummaryComponent } from './shoppingcart/order-summary/order-summary.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { ProductComponent } from './shoppingcart/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    LineItemComponent,
    TransactionsComponent,
    OrderSummaryComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
