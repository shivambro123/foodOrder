const initialState = {
    cart:[],
   
}

const productReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'addItem':
            return {
                ...state,
                cart:[...state.cart,{...action.payload , qty:1}]
        
            }

        case 'DECREMENT_ITEM':
            return{
                ...state,
                qty:state.qty-1
            }
            case 'INCREMENT_ITEM':
                return{
                    ...state,qty:state.qty+1
            }
        case 'REMOVE':
            return{
                cart:state.cart.filter((ele,ind)=>{
                    return ind != action.payload
                })
            }
        default:
            return state

    }
}
export default productReducer;