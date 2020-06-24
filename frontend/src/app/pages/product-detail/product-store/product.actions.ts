
import {Action} from '@ngrx/store';

export enum ActionTypes {
    LOAD_PRODUCT_REQUEST = '[Products] Load Product Request',
    LOAD_PRODUCT_FAILURE = '[Products] Load Product Failure',
    LOAD_PRODUCT_SUCCESS = '[Products] Load Product Success'
  }

  export class LoadProductRequestAction implements Action {
    readonly type = ActionTypes.LOAD_PRODUCT_REQUEST;
    constructor(public payload: {id: string}) {}
  }
  
  export class LoadProductFailureAction implements Action {
    readonly type = ActionTypes.LOAD_PRODUCT_FAILURE;
    constructor(public payload: { error: string }) {}
  }
  
  export class LoadProductSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_PRODUCT_SUCCESS;
    constructor(public payload: any) {}
  }
  
  export type Actions = LoadProductRequestAction | LoadProductFailureAction | LoadProductSuccessAction;