import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddEditCatComponent } from './category/add-edit-cat/add-edit-cat.component';
import { ProductsComponent } from './products/products.component';
import { ShowProdComponent } from './products/show-prod/show-prod.component';
import { AddEditProdComponent } from './products/add-edit-prod/add-edit-prod.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent,
    ProductsComponent,
    ShowProdComponent,
    AddEditProdComponent,
    CustomerComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
