import { Component, Inject } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-product-dialog-content',
  templateUrl: './add-product-dialog-content.component.html',
  styleUrls: ['./add-product-dialog-content.component.css']
})
export class AddProductDialogContentComponent {

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) 
    { }

  add(event: MatChipInputEvent):  void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.data.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(productASIN: string): void {
    const index = this.data.indexOf(productASIN);

    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }
}
