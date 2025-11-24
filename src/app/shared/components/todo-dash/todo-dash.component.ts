import { Component, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss']
})
export class TodoDashComponent implements OnInit {
todoArr : Array<Itodo>= [
  {
    todoItem : "java",
    id:"123"
  },
  {
    todoItem : "javascript",
    id:"1243"
  }

]
getEdit !: Itodo
  constructor(
private _snackbar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
 getNewToDo(nToDo : Itodo){
  this.todoArr = [nToDo,...this.todoArr]
  this._snackbar.openSnackBar(`New ToDo Item : ${nToDo.todoItem} Added Successfully!`)
 }
 getRtoDo(rtodo:Itodo){
  let cnf = confirm(`Are You Sure To Remove ?`)
  if(cnf){
  let geIndex = this.todoArr.findIndex( t => t.id === rtodo.id);
  this.todoArr.splice(geIndex,1)
  this._snackbar.openSnackBar(`New ToDo Item : ${rtodo.todoItem} removed Successfully`)
  }
 }
 getEditEmit(etodo :Itodo){
  this.getEdit = etodo
 }
 getUpdatedTodo(utodo:Itodo){
  
    let get_UIndex = this.todoArr.findIndex( todo => todo.id === utodo.id);
  this.todoArr[get_UIndex] = utodo;
  this._snackbar.openSnackBar(`New ToDo Item : ${utodo.todoItem} updated Successfully`)
  
 }

}
