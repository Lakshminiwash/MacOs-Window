import React from 'react'
import MacWindow from './MacWindow'
import githubData from "../assets/github.json"
import "./github.scss"

const GiftCard = ({item})=>{
    return (
        <div className="card">
            <img src={item.image} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="tags">
                {item.tags.map((tag, index)=>{
                    return <h4 key={index}>{tag}</h4>
                })}
            </div>
            <div className="demo">
                <a href={item.repoLink}>Repository</a>
                {item.demoLink && <a href={item.demoLink}>DemoLink</a>}
            </div>
        </div>
    )
}

const Github = ({windowName,setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cards">
            {githubData.map((item,index)=>{
                return <GiftCard key={index} item={item}/>
            })}
        </div>
    </MacWindow>
  )
}

export default Github
