import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Cart} from '../models/Cart';
import {Item} from '../models/Item';
import {ProductInOrder} from '../models/ProductInOrder';
import { CHECKOUT_URL, CART_URL } from 'src/endpoint';
import { ProductInfo } from '../models/productInfo';


@Injectable({
    providedIn: 'root'
})
export class CartService {

    localMap = {};

    private itemsSubject: BehaviorSubject<Item[]>;
    private totalSubject: BehaviorSubject<number>;
    public items: Observable<Item[]>;
    public total: Observable<number>;

    constructor(private http: HttpClient,
                private cookieService: CookieService,
                ) {
        this.itemsSubject = new BehaviorSubject<Item[]>(null);
        this.items = this.itemsSubject.asObservable();
        this.totalSubject = new BehaviorSubject<number>(null);
        this.total = this.totalSubject.asObservable();

    }

    private getLocalCart(): ProductInOrder[] {
        if (this.cookieService.check('cart')) {
            this.localMap = JSON.parse(this.cookieService.get('cart'));
            return Object.values(this.localMap);
        } else {
            this.localMap = {};
            return [];
        }
    }

    getCart(): Observable<ProductInOrder[]> {
        const localCart = this.getLocalCart();
        return of(localCart);
    }

    addItem(productInOrder): Observable<boolean> {
        if (this.cookieService.check('cart')) {
            this.localMap = JSON.parse(this.cookieService.get('cart'));
        }
        if (!this.localMap[productInOrder.productId]) {
            this.localMap[productInOrder.productId] = productInOrder;
        } else {
            this.localMap[productInOrder.productId].count += productInOrder.count;
        }
        this.cookieService.set('cart', JSON.stringify(this.localMap));
        return of(true);
    }

    update(productInOrder): Observable<ProductInOrder> {
            const url = CART_URL+`/${productInOrder.productId}`;
            return this.http.put<ProductInOrder>(url, productInOrder.count);
    }


    remove(productInOrder) {
        delete this.localMap[productInOrder.productId];
        return of(null);
    }


    checkout(): Observable<any> {
        let productInOrderList:ProductInOrder[] = Object.values(this.localMap);;
        const url = CHECKOUT_URL;
        this.localMap = {};
        return this.http.post(url, productInOrderList).pipe();
    }
}
