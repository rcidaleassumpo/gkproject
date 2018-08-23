import { Component, OnInit, Input } from '@angular/core';
import { TaxLineItem } from '../../taxlineitem';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {
  @Input() lineItemObj;

  constructor() { }

  ngOnInit() {
  }
}
