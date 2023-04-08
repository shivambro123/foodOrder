export const itemadd = (productItem,quant,tot) =>{
    return {type:'addItem',payload:productItem,value:quant,tot:tot}
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
export const removeInner = () =>{
    return ({type:'REMOVEINNER'})
}

