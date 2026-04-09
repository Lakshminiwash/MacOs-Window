import React from 'react'
import githubIcon from "../assets/github.webp"
import notesIcon from "../assets/notes.webp"
import pdfIcon from "../assets/pdf.webp"
import calenderIcon from "../assets/calender.webp"  
import spotifyIcon from "../assets/spotify.webp"
import gmailIcon from "../assets/gmail.webp"
import linkIcon from "../assets/link.webp"
import "./taskbar.scss"

const Taskbar = ({setWindowsState}) => {
  return (
    <footer className='taskbar'>
        <div className='icon github' onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}>   
            <img src={githubIcon} alt="" /> 
        </div>
        <div className='icon notes' onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}>
            <img src={notesIcon} alt="" />
        </div>
        <div className='icon pdf' onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}>
            <img src={pdfIcon} alt="" />
        </div>
        <div className='icon calender'  onClick={()=>{window.open("https://calendar.google.com/","_blank")}}>
            <img src={calenderIcon} alt="" />
        </div>
        <div className='icon spotify' onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}>
            <img src={spotifyIcon} alt="" />
        </div>
        <div className='icon gmail' onClick={()=>{window.open("mailto:lakshminiwashpatel@example.com","_blank")}}>
            <img src={gmailIcon} alt="" />
        </div>
        <div className='icon link' onClick={()=>{window.open("https://www.linkedin.com/in/lakshmi-niwash-patel-212469332/","_blank")}}>
            <img src={linkIcon} alt="" />
        </div>
    </footer> 
  )
}

export default Taskbar
