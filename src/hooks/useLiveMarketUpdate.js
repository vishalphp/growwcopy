import React, {useContext, useState} from 'react'
import { provateAxios } from '../api/BackendApi';
import LiveShareMarketUpdateContext from '../context/LiveShareMarketUpdate';
import LoginContext from '../context/LoginContext';

const useLiveMarketUpdate = () => { 


    const [listOfData, setListOfData] = useState();
    const loginContext = useContext(LoginContext);
    const liveCtx = useContext(LiveShareMarketUpdateContext);

    const LiveMarketUpdateAPI = async() =>{

        const LIVE_MARKET_API_URL = '/wp-json/wp/v2/marketindex';
      
        let isMounted = true;
        const abortController = new AbortController();

        try{

        const LivResult = await provateAxios.get(LIVE_MARKET_API_URL, {
            signal: abortController.signal,
            headers:{
                'Content-Type':'application/json',
               // 'Authorization': `Bearer ${loginContext.loginState.authToken}`
            }
        });
       
       //console.log(LivResult.data[0].acf);
       const marketindex = { 
                     'finnifty': LivResult.data[0].acf.finnifty,
                     'nifty_50': LivResult.data[0].acf.nifty_50, 
                     'nifty_100': LivResult.data[0].acf.nifty_100,
                     'nifty_bank': LivResult.data[0].acf.nifty_bank,
                     'nifty_midcap_100': LivResult.data[0].acf.nifty_midcap_100,
                     'nifty_next_50': LivResult.data[0].acf.nifty_next_50,
                     'sp_bse_100': LivResult.data[0].acf.sp_bse_100,
                     'sensex':  LivResult.data[0].acf.sensex, 
                     };
        

        isMounted && liveCtx.setLiveShareState((prev)=>{
          return {...prev, marketindex}
        });

    }catch(e){
        console.log(e);
    }

    return ()=>{
            isMounted = false;
            abortController.abort();
    }


    }


    const ShareValueUpdate = async() =>{

        const share_API_URL = '/wp-json/wp/v2/shares';

        let isMounted = true;
        const abortController = new AbortController();

        try{

            const shareResp = await provateAxios.get(share_API_URL,{
                signal: abortController.signal,
                headers: {
                    'Content-Type': 'application/json',
                   // 'Authorization': `Bearer ${loginContext.loginState.authToken}`
                }

            });

            //console.log(shareResp.data);
          /*  const objectSharesUpdate=[];
           shareResp.data.forEach((item, index) => {
                const nowAr = Object.values(item);
              // objectSharesUpdate[index] = nowAr;
                
              });*/
            
            let arrayMap = [];
            for(let i=0; i < shareResp.data.length; i++){
                const tempD = shareResp.data[i];
                arrayMap.push(JSON.stringify(tempD));   
            } 

            isMounted && liveCtx.setLiveShareState((prev)=>{
                return {...prev, arrayMap}  
              }); 

        }catch(e){
            console.log(e);
        }

        return ()=>{
            isMounted = false;
            abortController.abort();
    }

    }


  return {LiveMarketUpdateAPI, ShareValueUpdate};
}

export default useLiveMarketUpdate;