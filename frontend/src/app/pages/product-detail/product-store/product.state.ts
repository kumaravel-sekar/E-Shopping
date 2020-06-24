import { ProductInfo } from 'src/app/models/productInfo';

export interface ProductState {
    isLoading: boolean,
    error: String,
    productInfo: ProductInfo
   
}

export const initialState: ProductState = {
    isLoading: false,
    error: null,
    productInfo: {}
  };