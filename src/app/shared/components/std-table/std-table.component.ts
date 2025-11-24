import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from '../../models/std';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
@Input() getstdData !: Array<IStudent>
@Output() rStdEmmiter : EventEmitter<IStudent> = new EventEmitter<IStudent>()
  constructor() { }

  ngOnInit(): void {
  }
  onStdRemove(rstd : IStudent){
  this.rStdEmmiter.emit(rstd)
  }

}
