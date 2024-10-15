import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductListComponent // inorder for the feature to use this , the module should export the component , 
  ]
})
export class SharedModule { }
