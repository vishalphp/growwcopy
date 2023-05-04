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

        let currentDate = `${day}-${month}-${year}-${hours}-${minute}-${second}`;
        
        //return currentDate; // "17-6-2022"
        setClok(currentDate);

    }

    return clok;

}
