import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
import resumeFile from "../assets/resume.pdf"

const Resume = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="resume-window">
                <embed src={resumeFile} frameborder="0"></embed>
            </div>
        </MacWindow>
    )
}

export default Resume