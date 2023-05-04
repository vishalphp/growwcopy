import React from 'react' 
import './explore.css'
import Clock from '../../clock/Clock'

export default function ExplorePage() {
  return (
    <>
       <div className='clockbox'><Clock /></div>
       <div class="se24MarketOpenTxt fs14 fw500 clrSubText">MARKET CLOSES AT 03:30 PM</div>
       <div>
        <h2>Index</h2>
       </div>
       <div className='cardrow'>

       <div className='card'>
            NIFTY 50
             <br/>
            17000
       </div>
       <div className='card'>
           SENSEX
             <br/>
            57000
       </div>
       <div className='card'>
           BANK NIFTY 
             <br/>
            39000
       
       </div>
      </div>
    </>
  )
}
