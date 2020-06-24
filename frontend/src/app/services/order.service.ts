import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Order} from "../models/Order";
import { ORDER_URL } from 'src/endpoint';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private orderUrl = ORDER_URL;
    
    constructor(private http: HttpClient) {
    }

    getPage(): Observable<any> {
        return this.http.get(`${this.orderUrl}`).pipe();
    }
}
