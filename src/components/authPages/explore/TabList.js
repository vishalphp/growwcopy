import React from 'react'
import { NavLink } from 'react-router-dom'

import './tablist.css'


export default function TabList() {
  return (
     <>
       <ul className='tablist'>
           <li><NavLink to="/stock/explore" >Stocks</NavLink></li>
           <li><NavLink to="/mutual-funds/explore">Mutual Funds</NavLink></li>
           <li><NavLink to="/users/list/">Users List</NavLink></li>
           <li>Us Stocks</li>
       </ul>
     </>
  )
}
