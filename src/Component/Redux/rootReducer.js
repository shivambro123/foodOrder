import { combineReducers } from "redux";
import kitchebReducer from "./Kitchen/Reducer";
import productReducer from "./Product/Reducer";
import tableReducer from "./Table/Reducer";
import cartReducer from "./Cart/Reducer";

const rootReducer = combineReducers(
   {
    table:tableReducer,
    product:productReducer,
    kitchen:kitchebReducer,
    cart:cartReducer,
  
   }
)

export default rootReducer