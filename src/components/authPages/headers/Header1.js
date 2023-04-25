import React from 'react'
import TabList from '../explore/TabList'
import LogoFile from './LogoFile'
import TopNav from './TopNav'
import SearchInput from './SearchInput'
import ProfileNavs from './ProfileNavs'

import HeaderModuleCss from './css/Header1.module.css'

export default function Header1() {
  return (
    <>
    <div className={`fourboxheaders ${ HeaderModuleCss.displayflex}`}>
            <div className={`logowrap ${HeaderModuleCss.flex1}`}>
              <LogoFile />
            </div>
            <div className={`topnavwrap ${HeaderModuleCss.flex1} ${HeaderModuleCss.topnavsitem}`}>
              <TopNav />
            </div>
            <div className={`searchwrap ${HeaderModuleCss.flex2} ${HeaderModuleCss.topnavsitem}`}>
              <SearchInput />
            </div>
            <div className={`profilewrap ${HeaderModuleCss.flex2} ${HeaderModuleCss.topnavsitem}`}>
              <ProfileNavs />
            </div>
    </div>
    <TabList />
    </>
    
  )
}
