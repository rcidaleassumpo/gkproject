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

  allTransactionsLineItems: Array<any>
  ngOnInit() {
    this.getAllTransactionsLineLists()
  }
  
  getAllTransactionsLineLists(){
    this.allTransactionsLineItems = this.productsService.getSaleReturnLineItemList().map((obs:any) => obs.subscribe((data)=>{
      let newData = data
      return console.log(newData.map((lineItemSR)=>{
        let aNoPromotion:Transaction = {
          actionCode: lineItemSR['actionCode'],
          receiptText: lineItemSR['receiptText'],
          regularUnitPrice: lineItemSR['regularUnitPrice'],
          extendedDiscountAmount: lineItemSR['extendedDiscountAmount']

        }
        let aPromotion:TransactionNoPromotion = {
          actionCode: lineItemSR['actionCode'],
          receiptText: lineItemSR['receiptText'],
          regularUnitPrice: lineItemSR['regularUnitPrice'],
          extendedDiscountAmount: lineItemSR['extendedDiscountAmount'],
          grandExtendedAmount: lineItemSR['grandExtendedAmount'],
        }
        if(lineItemSR['extendedDiscountAmount'] == 0){
          return aNoPromotion
        } else {
          return aPromotion
        }
      })) 
    }))
  }

}


//["com.gk_software.gkr.api.txpool.dto.Transaction"].retailTransactionList[0]["com.gk_software.gkr.api.txpool.dto.RetailTransaction"].retailTransactionLineItemList