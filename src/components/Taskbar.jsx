import React from 'react'
import "./taskbar.scss"

const Taskbar = ({setWindowsState}) => {
  return (
    <footer className='taskbar'>
        <div className='icon github' onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}>   
            <img src="/src/assets/github.webp" alt="" />
        </div>
        <div className='icon notes' onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}>
            <img src="/src/assets/notes.webp" alt="" />
        </div>
        <div className='icon pdf' onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}>
            <img src="/src/assets/pdf.webp" alt="" />
        </div>
        <div className='icon calender'  onClick={()=>{window.open("https://calendar.google.com/","_blank")}}>
            <img src="/src/assets/calender.webp" alt="" />
        </div>
        <div className='icon spotify' onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}>
            <img src="/src/assets/spotify.webp" alt="" />
        </div>
        <div className='icon gmail' onClick={()=>{window.open("mailto:lakshminiwashpatel@example.com","_blank")}}>
            <img src="/src/assets/gmail.webp" alt="" />
        </div>
        <div className='icon link' onClick={()=>{window.open("https://www.linkedin.com/in/lakshmi-niwash-patel-212469332/","_blank")}}>
            <img src="/src/assets/link.webp" alt="" />
        </div>
    </footer> 
  )
}

export default Taskbar
