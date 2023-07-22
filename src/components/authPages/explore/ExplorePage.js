import React, {useContext, useEffect, useState} from 'react' 
import './explore.css'
import Clock from '../../clock/Clock';


import { io } from "socket.io-client";

import stockMarket from '../../../asset/stock-market.png'

import LiveShareMarketUpdateContext from '../../../context/LiveShareMarketUpdate'

let startbox = true;
const socket = io("http://localhost:8080");

export default function ExplorePage() {


const liveSenxUpdateCtx = useContext(LiveShareMarketUpdateContext);
   const target = {};
  useEffect(()=>{

    //to recive first message from server
    //socket.on("indexfundsresult",(msg)=>{
        //console.log(msg);
    //}) 

     socket.on("indexfundsresult",(msg, callback)=>{  
        msg.forEach(key => target[key.meta_key] = key.meta_value);
        liveSenxUpdateCtx.setLiveShareState((prev)=>{
          return {...prev, marketindex: target}
        });
        callback({status: 'ok'});
    })
   
    //message send to server
    //socket.emit("messagefromclient", "hi this is from client")
    startbox = false;
},[socket]);

useEffect(()=>{ 
      //send data to client
      const tempNumber = Math.floor((Math.random()*10000));
      const updateRef = {
         'nifity50':  (tempNumber * 2) + 1,
         'sensex': (((tempNumber * 8) / 2) * 2) + 1,
         'banknifty' : (((tempNumber * 2) / 4) * 2) + 5,
      };
      socket.emit("updatewpsql", updateRef);
},[target]);

//console.log(liveSenxUpdateCtx.liveShareState);

/*   useEffect(()=>{
    const socket = io("http://localhost:5000");
    //to recive first message from server
    socket.on("firstmessage",(msg)=>{
        console.log(msg);
    })
    //message send to server
    //socket.emit("messagefromclient", "hi this is from client")

},[]);*/


  // top gainers
   const bb = liveSenxUpdateCtx?.liveShareState?.arrayMap?.filter((item,index)=>{
     const res = JSON.parse(item);
     return res.acf.close_price < res.acf.market_price
   });
  
   const MapedTopshare = bb?.map((item, ind) =>{
    const res = JSON.parse(item);
     //console.log(res?.acf?.shares_name);
     if(ind > 3){
       return ''
     }
     return (<><div className='wraptop_gainer listingshr' key={ind}>
      <div className='imagearea'><img src={stockMarket} alt={res?.acf?.shares_name}/></div>
      <div className='share_name'>{res?.acf?.shares_name}</div>
      <div className='market_price'>&#8377;{(+(res?.acf?.market_price)).toFixed(2)}</div>
      <div className='perctge_calulte'>{  ((100 * (res?.acf?.market_price - res?.acf?.close_price)) / res?.acf?.close_price).toFixed(2)}%</div>
      </div></>); 
   });
   
// top losers
const filterLoser = liveSenxUpdateCtx?.liveShareState?.arrayMap?.filter((item,index)=>{
  const res = JSON.parse(item);
  return res.acf.close_price > res.acf.market_price
});

const MapedTopLosers = filterLoser?.map((item, ind) =>{
 const res = JSON.parse(item);
  //console.log(res?.acf?.shares_name);
  if(ind > 3){
    return ''
  }
  return (<><div className='wraptop_gainer listingshr' key={ind}>
   <div className='imagearea'><img src={stockMarket} alt={res?.acf?.shares_name}/></div>
   <div className='share_name'>{res?.acf?.shares_name}</div>
   <div className='market_price'>&#8377;{(+(res?.acf?.market_price)).toFixed(2)}</div>
   <div className='perctge_calulte'>{  ((100 * (res?.acf?.close_price - res?.acf?.market_price)) / res?.acf?.market_price).toFixed(2)}%</div>
   </div></>); 
});

// top by market cap
const filterMarketCap = liveSenxUpdateCtx.liveShareState?.arrayMap?.sort((item1,item2)=>{
  const res = JSON.parse(item1);
  const res2 = JSON.parse(item2);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   return res2.acf.market_cap - res.acf.market_cap
});


const MapedTopMarketCap = filterMarketCap?.map((item, ind) =>{
 const res = JSON.parse(item);
  //console.log(res?.acf?.shares_name);
  return (<><div className='wraplisting listingbyline'>
   <div className='share_name col1'>{res?.acf?.shares_name}</div>
  <div className='markpriceandupdown'>
     <div className='market_price'>&#8377;{(+(res?.acf?.market_price)).toFixed(2)}</div>
     <div className='perctge_calulte'>{  ((100 * (res?.acf?.market_price - res?.acf?.close_price)) / res?.acf?.close_price).toFixed(2)}%</div>
   </div>
   <div className='market_cap'>{res?.acf?.market_cap}</div>
   </div></>); 
});

  return (
    <>
       <div className='clockbox'><Clock /></div>
       <div class="se24MarketOpenTxt fs14 fw500 clrSubText">MARKET CLOSES AT 03:30 PM</div>
       <div>
        <h2>Index</h2>
       </div>
       <div className='cardrow widthfix'>

       <div className='card'> 
            NIFTY 50
             <br/>
           {liveSenxUpdateCtx?.liveShareState?.marketindex?.nifty_50}
       </div>
       <div className='card'>
           SENSEX
             <br/>
             {liveSenxUpdateCtx?.liveShareState?.marketindex?.sensex}
       </div>
       <div className='card '>
           BANK NIFTY 
             <br/>
             {liveSenxUpdateCtx?.liveShareState?.marketindex?.nifty_bank}
       
       </div>
      </div>


      <div className='cardrowx widthfix'>
        <h2 className='heading'>Top Gainers</h2>

        <div className='wrapshare'>
         {MapedTopshare}
         </div>

         <h2 className='heading'>Top Losers</h2>
         <div className='wrapshare'>
         {MapedTopLosers}
         </div>

         <h2 className='heading'>Top by Market Cap</h2>
         <div className='wrapshare marketcapwrapapnel'>
              <div className='heading_boxwrap'>
                  <div className='share_name col1'>Company Name</div>
                  <div className='markpriceandupdown'>
                    <div className='market_price'>Market Price</div>
                  </div>
                  <div className='market_cap'>Market Cap</div>
              </div>
              {MapedTopMarketCap}
         </div>
         


      </div>
      

    </>
  )
}
