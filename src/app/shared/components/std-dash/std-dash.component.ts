import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../models/std';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-std-dash',
  templateUrl: './std-dash.component.html',
  styleUrls: ['./std-dash.component.scss']
})
export class StdDashComponent implements OnInit {

 studentsArr : Array<IStudent> = [
  {
    fname: "Aarav",
    lname: "Sharma",
    nickname: "Avi",
    email: "aarav.sharma@example.com",
    contact: 9876543210,
    isActive: "active",
    id:'123'
  },
  {
    fname: "Diya",
    lname: "Patel",
    nickname: "Dee",
    email: "diya.patel@example.com",
    contact: 9123456780,
    isActive: "inactive",
    id:'1235'

  },
  {
    fname: "Karan",
    lname: "Verma",
    nickname: "KV",
    email: "karan.verma@example.com",
    contact: 9988776655,
    isActive: "active",
    id:'12663'

  },
  {
    fname: "Sneha",
    lname: "Rao",
    nickname: "Sneh",
    email: "sneha.rao@example.com",
    contact: 9090909090,
    isActive: "inactive",
    id:'12883'

  },
  {
    fname: "Rohan",
    lname: "Deshmukh",
    nickname: "Ron",
    email: "rohan.deshmukh@example.com",
    contact: 9812345678,
    isActive: "active",
    id:'129993'
  }
];
getEditedStd !: IStudent

constructor(
private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
getNewStd(nstd :IStudent){
this.studentsArr = [nstd,...this.studentsArr]
this._snackBar.openSnackBar(`New Student ${nstd.fname} added successfully !!!`)
}
getRemovedStd(rstd:IStudent){
  let cnf = confirm(` Are You Sure To Remove ?`)
   if(cnf){
let getIndex = this.studentsArr.findIndex(std => std.id === rstd.id)
this.studentsArr.splice(getIndex,1)
this._snackBar.openSnackBar(`New Student ${rstd.fname} removed successfully !!!`)

   }
}
getEditStd(estudent:IStudent){
 this.getEditedStd = estudent
}
getUpdtedStd(ustd : IStudent){
 let updateIndex  = this.studentsArr.findIndex(ustd => ustd.id === ustd.id)
 this.studentsArr[updateIndex] = ustd
 this._snackBar.openSnackBar(`Student ${ustd.fname} Updated successfully !!!`)
}
}
