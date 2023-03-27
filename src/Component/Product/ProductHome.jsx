import React, { useEffect, useState } from 'react'
import './ProHomecss.css'
import { data } from '../Data/Data'
import ProItem from './ProItem/ProItem'
import AppBar from '../AppBar/AppBar'
import { NavLink } from 'react-router-dom'

const ProductHome = () => {
 
  const [category,setCategory]=useState('')
  useEffect(()=>{
        setCategory(localStorage.getItem('category'))
  },[])
  // console.log(category)
  return (
    <>
    <AppBar/>
    <div className='container product'>
    <div style={{display:'flex',justifyContent:'space-between'}}><NavLink to="/category">Back</NavLink><NavLink to="/cart">Continue</NavLink></div>
    <div className='prodiv'>
    {
        data.filter((ele)=>{
          return (ele.category === category)
        }).map((val,ind)=>{
            return <ProItem src={val.img} name={val.name} price={val.price} category= {val.category} productitem={val}/>
        })
    }</div></div>
    </>
  )
}

export default ProductHome