import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, of, EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProductService } from '../../../services/product.service';
import * as ProductAction from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private actions$: Actions) {}

  performLogin$ = createEffect(() => 
  this.actions$.pipe(
      ofType(ProductAction.ActionTypes.LOAD_PRODUCT_REQUEST),
      mergeMap(action => this.performLogin(action)),
      catchError(error => of(new ProductAction.LoadProductFailureAction({ error })))
  )
);

performLogin(action) {
   return this.productService.getDetail(action.payload.id)
   .pipe(map(response => new ProductAction.LoadProductSuccessAction(response)));
}
    
}