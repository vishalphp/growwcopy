import React, {useState, useEffect} from 'react'

export default function Clock() {
    //const dateR = new Date();
    const [clok, setClok] = useState("");

    useEffect(()=>{

      const clearTimeIntervel =  setTimeout(()=>{
           ClockTimer();
        },1000);
    
        return ()=>{
            clearTimeout(clearTimeIntervel);
        } 

    },[clok]);

    const ClockTimer = () =>{

    
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let fulltime12 = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
        

        //let currentDate = `${n(day)}/${n(month)}/${n(year)} ${n(hours)}:${n(minute)}:${n(second)}`;
        let currentDate = `${n(day)}/${n(month)}/${n(year)} ${fulltime12}`;
         
        //return currentDate; // "17-6-2022"
        setClok(currentDate);

    }

    const n = (n) => {
        return n > 9 ? "" + n: "0" + n;
    }

    return clok;

}
