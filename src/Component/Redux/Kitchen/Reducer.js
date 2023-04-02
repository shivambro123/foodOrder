import { useEffect } from "react"
import { useSelector } from "react-redux"
import productReducer from "../Product/Reducer"
import CartItem from "../../Cart/CartItem/CartItem"

const initial = {
    kitchen:[],
}
console.log(CartItem)

const kitchebReducer = (state = initial,action) =>{
    switch(action.type){
        case 'continueKitchen': 
            return {
                ...state,
                kitchen:[...state.CartItem,{...action.payload}]
            }
        default:
            return state
    }
}

export default kitchebReducer   