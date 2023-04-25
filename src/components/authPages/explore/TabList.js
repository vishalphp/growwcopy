import React from 'react'
import { NavLink } from 'react-router-dom'

import './tablist.css'


export default function TabList() {
  return (
     <>
       <ul className='tablist'>
           <li><NavLink to="/explore/stock" >Stocks</NavLink></li>
           <li><NavLink to="/explore/mutual-funds">Mutual Funds</NavLink></li>
           <li>Us Stocks</li>
       </ul>
     </>
  )
}
