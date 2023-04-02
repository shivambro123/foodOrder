import React from 'react'
import './KitchenInnercss.css'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { decrementItem,incrementItem, removeItem } from '../../Redux/Product/Action';
import { useSelector } from 'react-redux';
const KitchenInner = ({id}) => { 
    const tablenum = localStorage.getItem('quantity')
    console.log(tablenum)
   const kitchendetail = useSelector(state=>state.kitchen)
   console.log(kitchendetail)
    const dispatch = useDispatch()
  return (
    <>
    <div className='cart-wrapper'>
        <div className='table'><h3>TableNo:</h3><span></span></div>
        <div className='cart-remove'><Button variant="outline-dark" onClick={()=>dispatch(removeItem(id))}>Remove</Button></div>
    </div>
    </>
  )
}

export default KitchenInner