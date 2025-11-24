import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../../models/product';
import { SnackBarService } from '../../services/snackbar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {

 productsArr: Array<IProduct> = [
  {
    pname: "Wireless Mouse",
    pdesc: "A lightweight and ergonomic wireless mouse designed for long working hours. Features smooth scrolling, precise tracking, and a comfortable grip suitable for both office work and gaming.",
    pid: "P001",
    pcat: "product"
  },
  {
    pname: "Gaming Keyboard",
    pdesc: "A durable mechanical keyboard with customizable RGB lighting. Offers high-speed response keys, anti-ghosting technology, and a strong build ideal for gamers and heavy typists.",
    pid: "P002",
    pcat: "category"
  },
  {
    pname: "Electronics",
    pdesc: "A wide category covering mobile devices, laptops, headphones, accessories, and smart gadgets. Designed for users looking for the latest technology with reliable quality and performance.",
    pid: "C001",
    pcat: "product"
  },
  {
    pname: "Smart Watch",
    pdesc: "A modern smartwatch that tracks your daily steps, heart rate, sleep quality, and fitness routines. Includes call alerts, message notifications, and multiple sport modes for active users.",
    pid: "P003",
    pcat: "category"
  },
  {
    pname: "Furniture",
    pdesc: "Premium furniture collection featuring ergonomic chairs, modern tables, wardrobes, and home décor items. Perfect for creating an elegant, functional living and working environment.",
    pid: "C002",
    pcat: "product"
  },{
    pname: "Wireless Mouse",
    pdesc: "A lightweight and ergonomic wireless mouse designed for long working hours. Features smooth scrolling, precise tracking, and a comfortable grip suitable for both office work and gaming.",
    pid: "P001",
    pcat: "category"
  }
];

getEPrd !: IProduct;

  constructor(
    private _snackbar :SnackBarService
  ) { }

  ngOnInit(): void {
  }
  getNewPrd(nprd :IProduct){
   this.productsArr = [nprd , ...this.productsArr]
  this._snackbar.openSnackBar(`the product ${nprd.pname} removed Succesfully`)

  }
  getRemovePrd(rprd : IProduct){
  let cnf = confirm(`are u sure to remove?`)
  if(cnf){
  let getIndex = this.productsArr.findIndex( prd => prd.pid === rprd.pid);
  this.productsArr.splice(getIndex,1);
  this._snackbar.openSnackBar(`the product ${rprd.pname} removed Succesfully`)
  }
  }
  getemitedPrd(eprd : IProduct){
  this.getEPrd = eprd
  }
  getUpdatedPrd(uprd : IProduct
  ){
  let getIndex = this.productsArr.findIndex( prd => prd.pid === uprd.pid);
  this.productsArr[getIndex] = uprd
  this._snackbar.openSnackBar(`the product ${uprd.pname} updated Succesfully`)
     
  }

}
