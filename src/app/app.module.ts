import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductRequesterComponent } from './product-requester/product-requester.component';
import { ProductReviewViewerComponent } from './product-review-viewer/product-review-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRequesterComponent,
    ProductReviewViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
