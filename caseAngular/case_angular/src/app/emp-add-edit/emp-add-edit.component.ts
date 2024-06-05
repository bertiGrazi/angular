import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemServices } from '../services/item.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm!: FormGroup;

  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor(private _fb: FormBuilder, private _empService: ItemServices, private _dialogRef: DialogRef<EmpAddEditComponent>) {
    this.empForm = this._fb.group({
      nameItem: '',
      measure: '',
      amount: '',
      price: '',
      product: '',
      validity: '',
      fabrication: '',
    })
  }

  onFormSubmit() {
    if(this.empForm.valid) {
      this._empService.addItem(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Item adicionado com sucesso!')
          this._dialogRef.close();
        }, 
        error: (err: any) => {
          console.log(err)
        }
      })
    }
  }
}
