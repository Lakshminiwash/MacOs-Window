import React, { useState, useEffect } from 'react'
import "./nav.scss"

const Nav = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const day = currentTime.toLocaleDateString('en-US', { weekday: 'short' });
  const month = currentTime.toLocaleDateString('en-US', { month: 'short' });
  const date = currentTime.getDate();
  const time = currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  return (
    <div className='container'>
        <div className='navPart1'>
            <i className="ri-apple-fill"></i>
            <h4>Lakshmi Niwash Patel</h4>
            <h4>File</h4>
            <h4>Window</h4>
            <h4>Terminal</h4>
        </div>
        <div className='navPart2'>
            <h4><i className="ri-wifi-line"></i></h4>
            <h4>{day} {month} {date}</h4>
            <h4>{time}</h4>
        </div>
    </div>
  )
}   

export default Nav
