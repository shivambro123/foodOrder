export const itemadd = (productItem) =>{
    return {type:'addItem',payload:productItem}
}

export const decrementItem = (quantity) =>{
    return ({type:'DECREMENT_ITEM',payload:quantity})
}

export const incrementItem = (quantity) =>{
    return ({type:'INCREMENT_ITEM',payload:quantity})
}

export const removeItem = (id) =>{
    return ({type:'REMOVE',payload:id})
}