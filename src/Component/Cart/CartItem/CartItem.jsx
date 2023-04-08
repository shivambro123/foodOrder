import React from 'react'
import './CartItemcss.css'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Redux/Product/Action';
const CartItem = ({src,name,price,quantity,id}) => { 
    const dispatch = useDispatch()
  return (
    <>
    <div className='cart-wrapper'>
        <div className='cart-image'><img src={src} alt="image" className='cart-size'/></div>
        <div className='cart-name'><h3>{name}</h3></div>
        <div className='cart-quantity'><span><h6>Quantity: {quantity}</h6></span></div>
        <div className='cart-price'><span>&#8360; {price * quantity}</span></div>
        <div className='cart-remove'><Button variant="outline-dark" onClick={()=>dispatch(removeItem(id))}>Remove</Button></div>
    </div>
  
    </> 
  )
}

export default CartItem