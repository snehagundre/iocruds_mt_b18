import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { UuidService } from '../../services/uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
isInEditMode: boolean = false;
@ViewChild('todoForm') todoFormReff !: NgForm
@Output() newToDoEmmiter : EventEmitter<Itodo> = new EventEmitter<Itodo>()
@Output() uToDoEmmiter : EventEmitter<Itodo> = new EventEmitter<Itodo>()
@Input() getEdit !: Itodo
  constructor(
    private _uuid :UuidService
  ) { }

  ngOnInit(): void {
  }
 onToDoAdd(){
  if(this.todoFormReff.value.trim()){
    let newToDo:Itodo ={
    ...this.todoFormReff.value,id:this._uuid.uuid()
  }
this.newToDoEmmiter.emit(newToDo);
this.todoFormReff.reset()
  }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEdit'].currentValue){
      this.isInEditMode=true
      this.todoFormReff.form.patchValue(changes['getEdit'].currentValue)
    }
  }
onToDoUpdate(){
if(this.todoFormReff.valid){
  let upTOdo :Itodo = {
  ...this.todoFormReff.value,id:this.getEdit.id
}
this.uToDoEmmiter.emit(upTOdo)
this.isInEditMode=false;
this.todoFormReff.reset()
  }
}
}
