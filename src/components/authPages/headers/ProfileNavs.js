import React, {useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { IoFolderOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { BsFileEarmark } from "react-icons/bs";
import { BsCardText } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineSettings } from "react-icons/md";
import { RxSwitch } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import ProfileImage from './ProfileImage';
import LoginContext from '../../../context/LoginContext';

import headermofcss from './css/Header1.module.css'

export default function ProfileNavs() {

  const [onclickopensubmenu, setOnclickOpenSubmenu] = useState(false);
  const loginCtx = useContext(LoginContext);

 const onclickopensubmenuHandler=()=>{
  setOnclickOpenSubmenu(!onclickopensubmenu);
 }


  return (
     <>
      <NavLink to="/bell" ><FaRegBell /></NavLink>
      <NavLink to="/wallet" ><FaWallet /></NavLink>
      <NavLink to="/Trolly" ><BsCart3 /></NavLink>
      <span className='onclickopensubmenu' onClick={onclickopensubmenuHandler}><ProfileImage /> <MdKeyboardArrowDown /></span>
        <div className={`subnavprofile ${onclickopensubmenu ? 'displayblock' : 'displaynone' }`}>
            <ul>
                <li><ProfileImage /> <div className='comenuname'><span className={`usernamepr ${headermofcss.crim}`}>{loginCtx.loginState.name}</span><span className={`usemailpr ${headermofcss.crim}`}>{loginCtx.loginState.username}</span></div></li>
                <li><BsBank />  Bank & Auto Pay</li>
                <li><IoFolderOutline />  Import Funds</li>
                <li><BsBookmark />  Watchlist</li>
                <li><BsFileEarmark /> Orders</li>
                <li><BsCardText />  Reports</li>
                <li><FaRegCalendarAlt /> SIP's</li>
                <li><BsTelephone />  Help & Support</li>
                <li><MdOutlineSettings />  Settings</li>
                <li><RxSwitch />  Dark Mode</li>
                <li><RxEnter />  LogOut</li>
            </ul>
        </div>
     </>
  )
}
