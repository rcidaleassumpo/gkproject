import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { Transaction } from '../transaction';
import { TransactionNoPromotion } from '../transactionNoPromotion';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private productsService: ApiDataService) { }

  allTransactionsLineItems: Object[]
  ngOnInit() {
    this.getAllTransactionsLineLists()
  }
  
  getAllTransactionsLineLists(){
    this.allTransactionsLineItems = this.productsService.getSaleReturnLineItemList().map((obs:any) => {
      return obs.subscribe((data) => {
        return data
      });
    })
  }

}


//["com.gk_software.gkr.api.txpool.dto.Transaction"].retailTransactionList[0]["com.gk_software.gkr.api.txpool.dto.RetailTransaction"].retailTransactionLineItemList