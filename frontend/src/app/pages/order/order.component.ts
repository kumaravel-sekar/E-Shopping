import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../../services/order.service";
import {Order} from "../../models/Order";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    constructor(private httpClient: HttpClient,
                private orderService: OrderService,
                private route: ActivatedRoute
    ) {
    }
    
    orders: Order [];

    ngOnInit() {
        this.orderService.getPage().subscribe(data => {
            this.orders = data;
        });

    }

}
