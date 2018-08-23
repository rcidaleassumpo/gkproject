import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  @Input() activeTransaction;
  constructor() { }

  ngOnInit() {
  }

}
