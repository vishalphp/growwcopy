import React from 'react'

import modulcss from './css/Header1.module.css'
import { FaSearch } from "react-icons/fa";




export default function SearchInput() {
  return (
     <>
        <form id='searchInput' className={`${modulcss.formcss}`}>
              <button type='submit' className={`submit ${modulcss.fontawsearch}`} ><FaSearch /></button>
              <input type='text' placeholder='What do you want to look?' className={`serchtextinput ${modulcss.serchtextinput}`} />
        </form>
     </>
  )
}
