import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppBar from '../AppBar/AppBar'
import { NavLink } from 'react-router-dom'
import './Cartcss.css'
import CartItem from './CartItem/CartItem'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'

const Cart = () => {
    const cartitem = useSelector(state=>state.product) 
    console.log(cartitem.cart); 
    const dispatch = useDispatch()
    useEffect(()=>{
      localStorage.setItem('tokitchen',cartitem.cart)

    },[])
    const onClickHandler = () =>{
      dispatch({type:'continueKitchen',payload:cartitem.cart});
      console.log('ji')
    }
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
    <Button variant="outline-success" onClick={onClickHandler}>Proceed</Button>
    </div>
    </>
  )
}

export default Cart