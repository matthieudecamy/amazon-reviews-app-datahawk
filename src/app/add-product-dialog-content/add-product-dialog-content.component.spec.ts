import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDialogContentComponent } from './add-product-dialog-content.component';

describe('AddProductDialogContentComponent', () => {
  let component: AddProductDialogContentComponent;
  let fixture: ComponentFixture<AddProductDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
