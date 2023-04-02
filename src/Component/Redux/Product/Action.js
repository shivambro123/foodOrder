export const itemadd = (productItem,quant) =>{
    return {type:'addItem',payload:productItem,value:quant}


}
export const decrementItem = () =>{
    return ({type:'DECREMENT_ITEM'})
}

export const incrementItem = () =>{
    return ({type:'INCREMENT_ITEM'})
}

export const removeItem = (id) =>{
    return ({type:'REMOVE',payload:id})
}