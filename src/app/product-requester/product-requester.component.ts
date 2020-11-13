import { Component, OnInit } from '@angular/core';
import { AddProductDialogContentComponent } from '../add-product-dialog-content/add-product-dialog-content.component'
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'product-requester',
  templateUrl: './product-requester.component.html',
  styleUrls: ['./product-requester.component.css']
})
export class ProductRequesterComponent implements OnInit {

  //TODO: replace this with link to back-end
  //TODO: also type the elements in the table
  elements: any[] = [
    {ASIN: 12345678, status: 'Indexed'},
    {ASIN: 23456789, status: 'Loading'},
    {ASIN: 34567890, status: 'Error'}
  ];

  dataSource = new MatTableDataSource<Element>(this.elements);


  displayedColumns: string[] = ['ASIN', 'Status'];

  constructor(public addProductDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddProductDialog(): void {
    const dialogRef = this.addProductDialog.open(AddProductDialogContentComponent, {
      data: []
    });
    dialogRef.afterClosed().subscribe(result => {
      //TODO: link with back-end (just call add, and have auto-reload ready)
      debugger
      if (result !== null) {
        result.forEach(asin => this.elements.push({ ASIN: asin, status: 'Loading' }));
      }
      this.refresh()
    })
  }

  refresh() {
    this.dataSource.data = this.elements;
  }
}
