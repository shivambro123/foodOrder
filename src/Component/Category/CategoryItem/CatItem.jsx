import React from 'react'
import { useNavigate } from 'react-router-dom'
import { category } from '../../Data/Data'
import './CatItemcss.css'
const CatItem = ({src,cat,name}) => {
  const navigate = useNavigate()
 const checkProduct = () =>{
  navigate('/product')
  localStorage.setItem('category',cat)

 }  
  return (
    <>
    <div className='item-wrapper' onClick={checkProduct}>   
            <div className='cat-logo'>
            <img src={src}
            className='img-size'
            alt="iamge"/>
            </div>
              <div className='name'>{cat || name}</div>  
    </div>
    </>
  )
}

export default CatItem