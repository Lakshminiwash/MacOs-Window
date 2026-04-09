import React, { useState } from 'react'
import "./app.scss"
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'
import Github from './components/Github'
import Notes from './components/Notes'
import Resume from './components/Resume'
import Spotify from './components/Spotify'

const App = () => {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false
  })
  return (
    <div className='parent'>
      <Nav />
      <Taskbar windowsState={windowsState} setWindowsState={setWindowsState} />

      {windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      {windowsState.note && <Notes windowName="note" setWindowsState={setWindowsState} />}
        {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
        {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
    </div>
  )
}

export default App
