import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private productsService: ApiDataService) { }

  allTransactionsLineItems = []
  taxLineItens = []
  totalTransactions = 0;
  active = 0
  ngOnInit() {
    this.getAllTransactionsLineLists()
  }
  
  getAllTransactionsLineLists(){
    this.productsService.getAllTransactions().map((obs:any) => {
      obs.subscribe((data) => {
        this.taxLineItens.push(data.filter((lineItem) => lineItem.receiptDescription == undefined))
        this.allTransactionsLineItems.push(data.filter((lineItem) => lineItem.receiptDescription != undefined))
      })
    })
    
  }

  isActiveTransaction(number){
    this.active = number
  }

}


//["com.gk_software.gkr.api.txpool.dto.Transaction"].retailTransactionList[0]["com.gk_software.gkr.api.txpool.dto.RetailTransaction"].retailTransactionLineItemList