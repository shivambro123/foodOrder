import React from 'react'
import { useSelector } from 'react-redux'
import AppBar from '../AppBar/AppBar'
import { NavLink } from 'react-router-dom'
import './Cartcss.css'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    const cartitem = useSelector(state=>state.product) 
    console.log(cartitem.cart); 

  return (
    <>
   <AppBar/>
   <div className='container'>
   <div style={{textAlign:'right'}}><NavLink to="/category">Add More</NavLink></div>
    <div>
      {  (!cartitem)? <h1>oops select item</h1>:
      <div className='d-flex flex-wrap'>
        {
            cartitem.cart.map((ele,id)=>{
                return <CartItem src={ele.img} name={ele.name} price={ele.price} quantity={ele.qty} id={id}/>
            })
        }
      </div>
      }
    </div>
    </div>
    </>
  )
}

export default Cart