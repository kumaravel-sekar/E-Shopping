import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  products: [];
  private paramSub: Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramSub = this.route.params.subscribe(() => {
      this.getCategory();
    });
  }

  getCategory() {
      const type = this.route.snapshot.url[1].path;
      this.productService.getCategory(type)
        .subscribe(products => {
          this.products = products;
        });
  }
}
