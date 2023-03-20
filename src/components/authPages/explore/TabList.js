import React from 'react'
import { Link } from 'react-router-dom'

import './tablist.css'


export default function TabList() {
  return (
     <>
       <ul className='tablist'>
           <li><Link to="/stock/explore" >Stocks</Link></li>
           <li><Link to="/mutual-funds/explore">Mutual Funds</Link></li>
           <li>Us Stocks</li>
       </ul>
     </>
  )
}
