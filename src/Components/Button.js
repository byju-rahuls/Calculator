import React from 'react'
import './style.css'
export default function Button(props) {
  return (
     <button style={{border:"2px solid balck"}} className="btn" onClick={()=>props.onClick(props.value)}>{props.value}</button>
  )
}
