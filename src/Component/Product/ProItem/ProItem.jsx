import React, { useState } from 'react'
import './Protemcss.css'
import Alert from 'react-bootstrap/Alert';
import { itemadd } from '../../Redux/Product/Action'
import { useDispatch, useSelector } from 'react-redux'
const ProItem = ({src,name,price,category,productitem}) => {
  const dispatch=useDispatch()
  const newdata = useSelector(state=>state.product)
  console.log('new',newdata)
  console.log(productitem)
  const [click,setClick]=useState(true)
  const clickEvent = () =>{
    var quant= prompt("How Many Items You Want to Add ")
    console.log(quant)
    dispatch(itemadd(productitem,quant)); 

    localStorage.setItem('quantity',quant)
    // localStorage.removeItem('quantity')
  }
  return (
    <>
    <div className='prowrapper'>
  <div className='image-wrapper'>
      <img src={src}
      alt="product image"
    className='pro-size'/>
  </div>
  <div className='desc'>
    <div className='desc-info'>
      <h4>{name}</h4>
      <h4>&#8377; {price}</h4>
    </div>
    <div className='desc-cat'>
      <h4>{category}</h4>
    </div>
    <button onClick={clickEvent}>{(click)?'Add Item':'Added'}</button>
  </div>
    </div>  
    </>
  )
}

export default ProItem