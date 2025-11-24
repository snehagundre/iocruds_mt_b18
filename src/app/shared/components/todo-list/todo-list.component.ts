import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() getTodoData !: Array<Itodo>
@Output() rtodoEmmiter : EventEmitter<Itodo> = new  EventEmitter<Itodo>()
@Output() etodoEmmiter : EventEmitter<Itodo> = new  EventEmitter<Itodo>()
  constructor() { }

  ngOnInit(): void {
  }
ontoDoRemove(rtodo : Itodo){
this.rtodoEmmiter.emit(rtodo)
}
ontoDoEdit(etodo:Itodo){
this.etodoEmmiter.emit(etodo)
}
}
