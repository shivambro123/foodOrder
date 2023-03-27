import { combineReducers } from "redux";
import productReducer from "./Product/Reducer";
import tableReducer from "./Table/Reducer";

const rootReducer = combineReducers(
   {
    table:tableReducer,
    product:productReducer,
  
   }
)

export default rootReducer