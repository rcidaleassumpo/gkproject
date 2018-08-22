import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Transaction } from '../transaction';
import { TransactionNoPromotion } from '../transactionNoPromotion';

const url = ['assets/tx-2018.03.26 16-28-49-54z7bf935c0506f47079e3ad68895565.json',
'assets/tx-2018.03.26 16-27-23-54z850d9fef49ae4f108e6777987e6c9.json',
'assets/tx-2018.03.26 16-29-12-54zbf89b632ed59491895a7afa5bcfd6.json',
'assets/tx-2018.03.26 16-29-32-54zeb35d1e28cc64a68996db5007c0e0.json']

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private allTransactions;

  constructor(private http: HttpClient) {
    this.getRetailTransactionLineItemList()
  }

  private getRetailTransactionLineItemList(){
    this.allTransactions = url.map(item => this.http.get(item)).map((obs) => obs.pipe(map((data) => {
      return data["com.gk_software.gkr.api.txpool.dto.Transaction"]
    .retailTransactionList[0]["com.gk_software.gkr.api.txpool.dto.RetailTransaction"]
    .retailTransactionLineItemList
  })))
    return this.allTransactions
  }
  
  getSaleReturnLineItemList(){
    return this.allTransactions.map((obs)=>{
      return obs.pipe(map((item:Array<any>)=>{
        return item.map((item)=>{
          if(item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].retailTransactionLineItemTypeCode == 'SR'){
            return item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].saleReturnLineItemList['0']['com.gk_software.gkr.api.txpool.dto.SaleReturnLineItem']
          }
        }).filter((item) => item != undefined)
          .map((lineItemSR) => {
          let aNoPromotion: Transaction = {
            actionCode: lineItemSR['actionCode'],
            receiptText: lineItemSR['receiptText'],
            regularUnitPrice: lineItemSR['regularUnitPrice'],
            extendedDiscountAmount: lineItemSR['extendedDiscountAmount']
          };
          let aPromotion: TransactionNoPromotion = {
            actionCode: lineItemSR['actionCode'],
            receiptText: lineItemSR['receiptText'],
            regularUnitPrice: lineItemSR['regularUnitPrice'],
            extendedDiscountAmount: lineItemSR['extendedDiscountAmount'],
            grandExtendedAmount: lineItemSR['grandExtendedAmount'],
          };
          if (lineItemSR['extendedDiscountAmount'] == 0) {
            return aNoPromotion;
          }
          else {
            return aPromotion;
          }
        });
      }))
    })
  }

}




/* ["com.gk_software.gkr.api.txpool.dto.Transaction"]
      .retailTransactionList[0]["com.gk_software.gkr.api.txpool.dto.RetailTransaction"]
      .retailTransactionLineItemList */
/* 
shoppingCart
Dados de Pagamento 
Review do Pedido 
Finalizado com sucesso 
 */

