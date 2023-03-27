import React from 'react'
import AppBar from '../AppBar/AppBar'
import CatItem from './CategoryItem/CatItem'
import { category } from '../Data/Data'
import { brands } from '../Data/Data'
import './CategoryPagecss.css'
const CategoryPage = () => {
  return (
    <>
    <AppBar/>
    <div className='catdiv container'>
        <div className='heading'>Eat What Makes You Happy</div>
        <div className='categoryDivision'>
        {
            category.map((ele)=>{
                return <CatItem src={ele.thumbnail} cat={ele.category}/>
            })
        }

</div>
<div className='heading'>Top Brands With Us</div>
<div className='categoryDivision'>
        {
            brands.map((ele)=>{
                return <CatItem src={ele.thumbnail} name={ele.name}/>
            })
        }

</div>

        {/* <CatItem/>  
        <CatItem/>  
        <CatItem/>  
        <CatItem/>   */}
    </div>

    </>
  )
}

export default CategoryPage