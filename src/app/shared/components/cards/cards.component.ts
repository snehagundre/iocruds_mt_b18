import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IStudent } from '../../models/std';
import { IProduct } from '../../models/product';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
  constructor(
    private _uuid : UuidService
  ) { }
@ViewChild('prdForm') prdFormReff !: NgForm
@Output() newprdEmmiter : EventEmitter<IProduct> = new EventEmitter<IProduct>()

  ngOnInit(): void {
  }
  onprdAdd(){
    let newPrd : IProduct={
     ...this.prdFormReff.value,pid:this._uuid.uuid()
    }
    this.newprdEmmiter.emit(newPrd);
    this.prdFormReff.reset()
  }

}
