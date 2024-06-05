import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ItemServices } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'case_angular';

  constructor(private _dialog: MatDialog, private _itemService: ItemServices) {}

  ngOnInit(): void {
    this.getItemsList()
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  getItemsList() {
    this._itemService.getItemList().subscribe({
      next: (res) => {
        console.log(res)
      }, 
      error: console.log
    })
  }
}
