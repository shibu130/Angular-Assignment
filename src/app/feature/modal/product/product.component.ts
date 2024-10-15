import { Component, inject, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  readonly dialogRef = inject(MatDialogRef<ProductComponent>);

  formSubmitted:boolean = false;

  modalForm:FormGroup

  constructor(private _builder:FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, ){

    debugger
    this.modalForm = this._builder.group({

      id:[this.data.id],
      name:[this.data.name, [Validators.required]],
      description:[this.data.description, [Validators.required]],
      price:[this.data.price ,[Validators.required]]


    })


  }

  
  closeModal(){
    this.formSubmitted = true
    if(this.modalForm.valid){
      this.dialogRef.close(this.modalForm.getRawValue());
    }
  }

}
