import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../models/todo';
import { NgForm } from '@angular/forms';
import { IStudent } from '../../models/std';
import { UuidService } from '../../services/uuid';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
isInEditMode: boolean = false;
@ViewChild('stdForm') stdFormreff !: NgForm
@Output() newStdEmmiter : EventEmitter<IStudent> = new EventEmitter<IStudent>()
  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
  }
onStdAdd(){
 let newStd:IStudent = {
  ...this.stdFormreff.value,id:this._uuid.uuid()
 }
 this.newStdEmmiter.emit(newStd);
 this.stdFormreff.reset()
}
}
