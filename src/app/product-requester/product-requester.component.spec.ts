import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequesterComponent } from './product-requester.component';

describe('ProductRequesterComponent', () => {
  let component: ProductRequesterComponent;
  let fixture: ComponentFixture<ProductRequesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
