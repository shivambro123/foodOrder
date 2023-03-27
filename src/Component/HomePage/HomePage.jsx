import React from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePagecss.css'

const HomePage = () => {
  const navigate=useNavigate()
  
  const startButton = () =>{
    navigate('/table')
  }
  return (
    <div>
        <div className='wrapper'>
            <div className='content'>
                <h1>Welcome to <br/>Our Garmet </h1><br/>
                <button onClick={startButton}>Order Here</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage