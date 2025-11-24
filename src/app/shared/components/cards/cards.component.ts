import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IStudent } from '../../models/std';
import { IProduct } from '../../models/product';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit,OnChanges {
  
  constructor(
    private _uuid : UuidService
  ) { }
@ViewChild('prdForm') prdFormReff !: NgForm
@Output() newprdEmmiter : EventEmitter<IProduct> = new EventEmitter<IProduct>()
@Output() uprdEmmiter : EventEmitter<IProduct> = new EventEmitter<IProduct>()
@Input()  getEprdemited !: IProduct
isInEditMode :boolean= true

  ngOnInit(): void {
  }
  onprdAdd(){
    let newPrd : IProduct={
     ...this.prdFormReff.value,pid:this._uuid.uuid()
    }
    this.newprdEmmiter.emit(newPrd);
    this.prdFormReff.reset()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEprdemited'].currentValue){
      this.isInEditMode = true
      this.prdFormReff.form.patchValue(changes['getEprdemited'].currentValue)
    }
  }
  onPrdUpdate(){
    let upPrd : IProduct={
     ...this.prdFormReff.value,pid:this.getEprdemited.pid
    }
    this.uprdEmmiter.emit(upPrd);
    this.prdFormReff.reset()
  }

}
