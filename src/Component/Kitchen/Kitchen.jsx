import React from 'react'
import './Kitchencss.css'
import KitchenInner from './KitchenInner/KitchenInner'
import { useSelector } from 'react-redux';

const Kitchen = () => {

  return (
    <div>Kitchen
        <KitchenInner/>
    </div>
  )
}

export default Kitchen