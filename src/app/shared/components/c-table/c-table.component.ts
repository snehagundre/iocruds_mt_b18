import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-c-table',
  templateUrl: './c-table.component.html',
  styleUrls: ['./c-table.component.scss']
})
export class CTableComponent implements OnInit {
  @Input() getStdObj !: IProduct;
  @Output() rprdEmmiter : EventEmitter<IProduct> = new  EventEmitter<IProduct>()
  @Output() eprdEmmiter : EventEmitter<IProduct> = new  EventEmitter<IProduct>()

  constructor() { }

  ngOnInit(): void {
  }
  onProdRemove(rPrd : IProduct){
this.rprdEmmiter.emit(rPrd)
  }
  onProdEdit(eprd : IProduct){
this.eprdEmmiter.emit(eprd)

  }

}
