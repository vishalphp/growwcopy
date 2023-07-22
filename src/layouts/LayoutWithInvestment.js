import React, { useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom';
import Header1 from '../components/authPages/headers/Header1';
import Footer from '../components/authPages/footer/Footer';


import useLiveMarketUpdate from '../hooks/useLiveMarketUpdate';
import LiveShareMarketUpdateContext from '../context/LiveShareMarketUpdate';

const LayoutWithInvestment =()=> {

 const [liveUpdateChange, setLiveUpdateChange]= useState(true);
 const liveMarketUpCtx = useContext(LiveShareMarketUpdateContext);

 const {LiveMarketUpdateAPI, ShareValueUpdate}  = useLiveMarketUpdate();

 const UpdateLiveFunctionRun = async() =>{
  await LiveMarketUpdateAPI();
 }

 const ShareValueUpdateRun = async() =>{
  await ShareValueUpdate();
 }

  useEffect(()=>{
    // const clearTimeoutLivCtx = setTimeout(()=>{
      UpdateLiveFunctionRun();
      ShareValueUpdateRun();
      //setLiveUpdateChange(!liveUpdateChange);
    // },1000000);

    // return ()=>{
     // clearTimeout(clearTimeoutLivCtx);
    // }
      
  },[]);


 // console.log(liveMarketUpCtx.liveShareState);

  return (
    
      <>
      <div className='mainwraper'>
       <Header1 />
      <main className="App">
        <div className='wrpaerlayout'>
       <div className='midleftsection'>
           <Outlet />
       </div>
        <div className='ivestmentpanel'>
            <div>Your Investment</div>
            <div>
                all investment show here
            </div>
        </div>
        </div>
      </main>
      </div>
      <Footer />
      </>

  )
}

export default LayoutWithInvestment;
