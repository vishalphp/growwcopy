import React, { useState } from 'react'

const LiveShareMarketUpdateContext = React.createContext({});

export default LiveShareMarketUpdateContext;

export const LiveShareMarketUpdateProvider = ({children}) =>{

 const [liveShareState, setLiveShareState] = useState();

 return <LiveShareMarketUpdateContext.Provider value={{liveShareState, setLiveShareState}} >{children}</LiveShareMarketUpdateContext.Provider>

}