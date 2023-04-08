import { React} from "react"

const initialState = {
    cart:[],
    total:0
}
const productReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'addItem':
            return {
                ...state,
                cart:[...state.cart,{...action.payload,qty:action.value}],  
                total:state.total + (action.tot)
            }

        case 'DECREMENT_ITEM':
            return {    
               qty:state.qty - 1

            }
            case 'INCREMENT_ITEM':
                return{
                 qty:state.qty + 1
            }
        case 'REMOVE':
            return{
                cart:state.cart.filter((ele,ind)=>{
                    return ind != action.payload
                }) 
            }
            case 'REMOVEINNER':
                return {
                    cart:[]
                }
        default:
            return state

    }
}
export default productReducer;