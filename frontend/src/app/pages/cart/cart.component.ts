import {AfterContentChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Subject, Subscription} from 'rxjs';
import {ProductInOrder} from '../../models/ProductInOrder';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, AfterContentChecked {

    constructor(private cartService: CartService,
                private cookieService: CookieService,
                private router: Router) {
    }
    productInOrders = [];
    total = 0;
    userSubscription: Subscription;
    private updateTerms = new Subject<ProductInOrder>();
    sub: Subscription;

    static validateCount(productInOrder) {
        const max = productInOrder.productStock;
        if (productInOrder.count > max) {
            productInOrder.count = max;
        } else if (productInOrder.count < 1) {
            productInOrder.count = 1;
        }
        console.log(productInOrder.count);
    }

    ngOnInit() {
         this.cartService.getCart().subscribe(prods => {
             this.productInOrders = prods;
         });
    }

    ngOnDestroy() {
    }

    ngAfterContentChecked() {
        this.total = this.productInOrders.reduce(
            (prev, cur) => prev + cur.count * cur.productPrice, 0);
    }

    addOne(productInOrder) {
        productInOrder.count++;
        CartComponent.validateCount(productInOrder);
        this.updateTerms.next(productInOrder);
    }

    minusOne(productInOrder) {
        productInOrder.count--;
        CartComponent.validateCount(productInOrder);
        this.updateTerms.next(productInOrder);
    }

    onChange(productInOrder) {
        CartComponent.validateCount(productInOrder);
        this.updateTerms.next(productInOrder);
    }


    remove(productInOrder: ProductInOrder) {
        this.cartService.remove(productInOrder).subscribe(
            success => {
               this.productInOrders = this.productInOrders.filter(e => e.productId !== productInOrder.productId);
                console.log('Cart: ' + this.productInOrders);
            },
            _ => console.log('Remove Cart Failed'));
    }

    checkout() {
             this.cartService.checkout().subscribe(
                res => {
                    const url = `/order-confirm/`+`${res.orderNumber}`;
                    this.cookieService.delete("cart");
                    this.router.navigateByUrl(url);
                },
                error1 => {
                    console.log('Checkout Cart Failed');
                });

        }
}

