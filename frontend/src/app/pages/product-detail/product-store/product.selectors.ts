import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const productDetailState = createFeatureSelector<ProductState>('PRODUCT_DETAIL');

export const getProductDetails = createSelector(
    productDetailState, 
    (state: ProductState) => {
        if(!state.isLoading) {
           return state.productInfo;
        }
    }
);