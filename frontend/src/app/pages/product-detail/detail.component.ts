import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductInOrder} from '../../models/ProductInOrder';
import {ProductInfo} from '../../models/productInfo';
import { CartService } from 'src/app/services/cart.service';
import { Store } from '@ngrx/store';
import { LoadProductRequestAction } from './product-store/product.actions';
import * as ProductSelector from './product-store/product.selectors'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title: string;
  count: number;
  productInfo: ProductInfo;

  constructor(
      private productService: ProductService,
      private cartService: CartService,
      private route: ActivatedRoute,
      private store: Store,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.getProduct();
    this.title = 'Product Detail';
    this.count = 1;
  }
  
  addToCart() {
    this.cartService
        .addItem(new ProductInOrder(this.productInfo, this.count))
        .subscribe(
            res => {
              if (!res) {
                console.log('Add Cart failed' + res);
                throw new Error();
              }
              this.router.navigateByUrl('/cart');
            },
            _ => console.log('Add Cart Failed')
        );
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('productId');
    this.store.dispatch(new LoadProductRequestAction({id:id}))
    this.store.select(ProductSelector.getProductDetails).subscribe(
      prod => {
        this.productInfo = prod;
      }
    )
  }

  validateCount() {
    console.log('Validate');
    const max = this.productInfo.productStock;
    if (this.count > max) {
      this.count = max;
    } else if (this.count < 1) {
      this.count = 1;
    }
  }
}
