import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderNumber: string;
  orderDate : Date;
  deliveryDate: Date;
  orderStatus: string;

  constructor( private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.orderStatus = "Processing..";
    this.orderDate = new Date();
    this.deliveryDate = new Date();
    this.deliveryDate.setDate(this.orderDate.getDate() + 2);
    this.orderNumber = this.route.snapshot.url[1].path;
  }

  homepage() {
    this.router.navigateByUrl("");
  }
}
