import React from 'react'

export default function Button(props) {
  return (
     <button style={{border:"2px solid balck"}} className="btn btn-success" onClick={()=>props.onClick(props.value)}>{props.value}</button>
  )
}
