import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './pages/card/card.component';
import { DetailComponent } from './pages/product-detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './pages/product-detail/product-store/product.effects'
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './pages/product-detail/product-store/product.reducer';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OrderComponent } from './pages/order/order.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    DetailComponent,
    CartComponent,
    OrderConfirmationComponent,
    AboutUsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    StoreModule.forFeature("PRODUCT_DETAIL", ProductReducer),
    StoreModule.forRoot({ todos: ProductReducer }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
