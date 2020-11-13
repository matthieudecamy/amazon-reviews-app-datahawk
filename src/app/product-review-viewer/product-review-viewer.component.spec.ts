import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewViewerComponent } from './product-review-viewer.component';

describe('ProductReviewViewerComponent', () => {
  let component: ProductReviewViewerComponent;
  let fixture: ComponentFixture<ProductReviewViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReviewViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
