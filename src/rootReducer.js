import { combineReducers } from "redux";
import products from './productReducer';
import arithmeticOp from './arithmeticOpReducer';

export default combineReducers({
    products,
    arithmeticOp
  }
);