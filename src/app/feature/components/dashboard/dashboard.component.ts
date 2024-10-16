import { Component, inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../../modal/product/product.component';
import { DashboardService } from '../../service/dashboard.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent  implements OnDestroy{

  products:any[] = []
  isLoading:boolean = false;
  virtualScrollCount:number = 50;
  pageMode:string = "grid";
  numberOfItems = 10;
  subscribe: Subscription
  
  constructor(private _router:Router , private _dialog:MatDialog, private _dashboardService:DashboardService){
    this.createProductArrayResult(100);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
 
  createProductArrayResult(length:number){

    this.isLoading = true;
    // decimals are bad 
    this.subscribe  =   this._dashboardService.createProductArray(Math.floor(length)).subscribe(res=>{
          this.isLoading = false;
          this.products = this.products.concat(res);
        })

  }


 
  logout(){
    localStorage.clear();
    console.log(localStorage.getItem('loggedin'));
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
