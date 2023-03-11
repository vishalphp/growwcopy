import React from 'react'
import patternIeftlogin from '../../asset/patternIeftlogin.svg'

export default function LeftSection() {
  return (
    <div className='leftwraper' style={{backgroundImage:`url(${patternIeftlogin})` }}>
            <div class="lTopText">Simple, Free</div>
            <div class="lTopText">Investing.</div>
    </div>
  )
}
