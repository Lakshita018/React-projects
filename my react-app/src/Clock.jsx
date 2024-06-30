import React , {useState,useEffect} from 'react'
import './Clock.css'

function Clock ()  {
  const [time,setTime]= useState(new Date());
  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setTime(new Date());
    },1000);
    return ()=> {
      clearInterval(intervalId);
    }
  },[]);
  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >=12 ? "pm":"am";
    hours = hours%12 ||12;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`;
  }
  function pad(num){
    return(num<10?"0":"")+num;
  }
  
  return (
    <div>
      <div className="clock">
        <span>{formatTime()}</span>

      </div>
    </div>
  )
}

export default Clock