import { Actions, ActionTypes } from './product.actions';
import { initialState, ProductState } from './product.state';

export function ProductReducer(state = initialState, action: Actions): ProductState {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productInfo: action.payload,
        error: null
      };
    }
    case ActionTypes.LOAD_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}