import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import AppBar from '../AppBar/AppBar'
import { NavLink } from 'react-router-dom'
import './Cartcss.css'
import CartItem from './CartItem/CartItem'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { proceedItem } from '../Redux/Cart/Action'
import { removeInner } from '../Redux/Product/Action'

const Cart = () => {
  // const [totalprice,setTotalprice]=useState(0) 
    const cartitem = useSelector(state=>state.product) 
    console.log(cartitem.cart); 
    const dispatch = useDispatch(); 
    const onClickHandler = () =>{
      console.log('ji')
      const value = cartitem.cart;  
          alert('Your Order is on the Way 🍱' )
          dispatch(proceedItem(value))
         dispatch(removeInner()) 
         console.log('remove',cartitem.cart);
    }       
  return (
    <>
   <AppBar/>
   <div className='container'>
   <div style={{textAlign:'right'}}><NavLink to="/category">Add More</NavLink></div>
    <div>
      
      <div className='d-flex flex-wrap'>
        {
            cartitem.cart.map((ele,id)=>{
                return <CartItem src={ele.img} name={ele.name} price={ele.price} quantity={ele.qty} id={id}/>
            })
        }
      </div>
      
    </div>
   {(!cartitem.cart.length == 0) ? <Button variant="outline-success" onClick={onClickHandler}>Proceed</Button> : <button>Add Item Please</button> } 
    </div>
    <div className='TotalPrice'>
      <h4>Total: &#8360; {cartitem.total}</h4> 
    </div>
    </>
  )
}

export default Cart