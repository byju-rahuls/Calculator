import React from 'react'
import Button from './Button'
import './style.css'

export default function Board(props) {
     
    function clickButton(id)
    {
        return(
            <Button value={id} onClick={props.onClick}/> 
        )
    }
     
    return (
        
        <div className="main"> 
        <h3 style={{margin:"60px"}}>{props.heading}</h3>
        <div className="clc">
            
            <div className="screen" style={{height:"60px", border:"2px solid black", fontSize:"30px",borderRadius: "20px"}}>{props.value}</div>
            <div className="row">
                <div className="col-3">{clickButton("AC")}</div>
                <div className="col-3">{clickButton("+/-")}</div>
                <div className="col-3">{clickButton("%")}</div>
                <div className="col-3">{clickButton("/")}</div>
            </div>
            <div className="row">
                <div className="col-3">{clickButton("7")}</div>
                <div className="col-3">{clickButton("8")}</div>
                <div className="col-3">{clickButton("9")}</div>
                <div className="col-3">{clickButton("+")}</div>
            </div>
            <div className="row">
                <div className="col-3">{clickButton("4")}</div>
                <div className="col-3">{clickButton("5")}</div>
                <div className="col-3">{clickButton("6")}</div>
                <div className="col-3">{clickButton("-")}</div>
            </div>
            <div className="row">
                <div className="col-3">{clickButton("1")}</div>
                <div className="col-3">{clickButton("2")}</div>
                <div className="col-3">{clickButton("3")}</div>
                <div className="col-3">{clickButton("*")}</div>
            </div>
            <div className="row">
                <div className="col-3">{clickButton("0")}</div>
                <div className="col-3">{clickButton(".")}</div>
                <div className="col-3">{clickButton("00")}</div>
                <div className="col-3">{clickButton("=")}</div>
            </div>
        </div>
        </div>
    )
}
