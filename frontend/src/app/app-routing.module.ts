import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { CartComponent } from './pages/cart/cart.component';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './pages/product-detail/detail.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OrderComponent } from './pages/order/order.component';



const routes: Routes = [
  {path: '', component: AboutUsComponent},
  {path: 'category/:id', component: CardComponent},
  {path: 'product/:productId', component: DetailComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-confirm/:orderNo', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
