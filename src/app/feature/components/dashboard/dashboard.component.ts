import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {da, faker} from '@faker-js/faker'
import { delay } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ProductComponent } from '../../modal/product/product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  products:any[] = []
  isLoading:boolean = false;
  virtualScrollCount:number = 50;
  pageMode:string = "grid";
  
  constructor(private _router:Router , private _dialog:MatDialog){
    this.createProductArrayResult(100);
  }
 
  createProductArrayResult(length:number){

    this.isLoading = true;

    this.createProductArray(length).subscribe(res=>{
      this.isLoading = false;
      this.products = this.products.concat(res);
    })

  }


  createProductArray(length:number){
    return of(Array.from({length:length}).map(this.createProductObject)).pipe(delay(2000))
  }

  createProductObject(){
    
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      shortName:faker.commerce.product(),
      productAjective:faker.commerce.productAdjective(),
      productMaterial:faker.commerce.productMaterial(),
      isbn:faker.commerce.isbn(10)
      
    }

  }

  logout(){
    sessionStorage.clear()
    this._router.navigate(["login"]);
  }


  imageSymbolText(text:string){
    return text.split(" ").map(e=> e.charAt(0)).join('');
  }


  openDialog(data:any){

   let modalRef =  this._dialog.open(ProductComponent,{
    data:data
   })

   modalRef.afterClosed().subscribe(e=>{
    
    let index = this.products.findIndex(res=>res.id == e.id);

    this.products[index].name = e.name;
    this.products[index].description = e.description;
    this.products[index].price = e.price;

   })

   

    
  }


  changePageMode(value:string):void{
    this.pageMode = value;
  }


}
