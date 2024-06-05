import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ItemServices } from './services/item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nameItem', 'measure', 'amount', 'price', 'product', 'validity', 'fabrication', 'action'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        //console.log(res)
      }, 
      error: console.log
    })
  }

  deleteItems(id: number) {
    this._itemService.deleteItem(id).subscribe({
      next: (res) => {
        alert('Item Deletado!')
        this.getItemsList()
      },
      error: console.log
    })
  }
}