import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {
    path:'category',component:CategoryComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'customer',component:CustomerComponent
  },
  {
    path:'orders',component:OrdersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
