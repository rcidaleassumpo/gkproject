import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs';

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
          /* } else if(item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].retailTransactionLineItemTypeCode == 'TX'){
            return item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].taxLineItemList['0']['com.gk_software.gkr.api.txpool.dto.TaxLineItem']
          } else if(item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].retailTransactionLineItemTypeCode == 'TL'){
            return item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].tenderLineItemList['0']['com.gk_software.gkr.api.txpool.dto.TenderLineItem']
          } else if(item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].retailTransactionLineItemTypeCode == 'PM'){
            return item['com.gk_software.gkr.api.txpool.dto.RetailTransactionLineItem'].priceModificationLineItemList['0']['com.gk_software.gkr.api.txpool.dto.PriceModificationLineItem'] */
          }
        }).filter((item) => item != undefined)
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

