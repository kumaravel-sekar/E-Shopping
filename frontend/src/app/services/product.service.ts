import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { CATERGORY_URL } from 'src/endpoint';
import { PRODUCT_URL } from 'src/endpoint';
import { ProductInfo } from '../models/productInfo';
import {catchError} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
    }
    
    getCategory(categoryId: string): Observable<any> {
        const url = CATERGORY_URL+`${categoryId}`;
        return this.http.get(url);
    }

    getDetail(id: String): Observable<ProductInfo> {
        const url = PRODUCT_URL+`${id}`;
        return this.http.get<ProductInfo>(url).pipe(
            catchError(_ => {
                console.log("Get Detail Failed");
                return of(new ProductInfo());
            })
        );
    }

}
