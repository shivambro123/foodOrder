import React from 'react'
import './TableItemcss.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const TableItem = ({tablenum}) => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const tableBooked = () =>{
      dispatch({type:'SELECT_TABLE',payload:tablenum});
      navigate('/category')
    }
  return (
    <>
    <div className='table-container' onClick={tableBooked}>
        <div className='num'><h1>{tablenum}</h1></div>
    </div>
    </>
  )
}

export default TableItem