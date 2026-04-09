import React from 'react'
import { Rnd } from 'react-rnd'
import "./macWindow.scss"

function MacWindow({ children, width = "35vw", height = "60vh", windowName, setWindowsState }) {
    return (
        <div>
            <Rnd
                default={
                    {
                        width: width,
                        height: height,
                        x: 100,
                        y: 50
                    }
                }
            >
                <div className='dragable'> 
                    <div className='nav'>
                        <div className="dots">
                            <div className="dot red" onClick={() => { setWindowsState(state => ({ ...state, [windowName]: false })); }}></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="title">Lakshmi Niwash Patel</div>
                    </div>
                    <div className='window'>
                        {children}
                    </div>
                </div>
            </Rnd>
        </div>
    )
}

export default MacWindow
