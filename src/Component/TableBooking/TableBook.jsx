import React from 'react'
import TableItem from './TableItem'
import './TableBookcss.css'
import { useSelector } from 'react-redux'

const TableBook = () => {
    const data = useSelector(state=>state.table)
    console.log(data)
  return (
    <>  
    <div className='table-wrapper container'>
        <div className='table-heading'>
        <h1>Select Table</h1>
        </div>
        <div className='tableDiv'>
        <TableItem tablenum="1"/>
        <TableItem tablenum="2"/>
        <TableItem tablenum="3"/>
        <TableItem tablenum="4"/>
        <TableItem tablenum="5"/>
        <TableItem tablenum="6"/>


        </div>
    </div>
    </>
  )
}

export default TableBook