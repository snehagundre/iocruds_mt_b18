import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';
import { IStudent } from '../../models/std';
import { UuidService } from '../../services/uuid';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit,OnChanges{
isInEditMode: boolean = false;
@ViewChild('stdForm') stdFormreff !: NgForm
@Output() newStdEmmiter : EventEmitter<IStudent> = new EventEmitter<IStudent>()
@Output() uStdEmmiter : EventEmitter<IStudent> = new EventEmitter<IStudent>()
@Input() GetEmitedEstd !: IStudent
  constructor(
    private _uuid : UuidService
  ) { }
ngOnChanges(changes: SimpleChanges): void {
  if(changes['GetEmitedEstd'].currentValue){
    this.isInEditMode = true
this.stdFormreff.form.patchValue(changes['GetEmitedEstd'].currentValue)
  }
}
  ngOnInit(): void {
  }
onStdAdd(){
 let newStd:IStudent = {
  ...this.stdFormreff.value,id:this._uuid.uuid()
 }
 this.newStdEmmiter.emit(newStd);
 this.stdFormreff.reset()
}
onStdUpdate(){
  if(this.stdFormreff.valid){
    let newStdI : IStudent = {
   ...this.stdFormreff.value,id:this.GetEmitedEstd.id
  }
  this.uStdEmmiter.emit(newStdI);
  this.isInEditMode=false;
  this.stdFormreff.reset()
}
  }
}
