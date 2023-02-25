import { React, useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import './style.css'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";


export default function Login() {
    const url = "https://calculator-9yds.onrender.com/login"
    let history = useNavigate();
    const [status, setStatus] = useState("");

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    function handle(e) {
        let newData ={...data}
        newData[e.target.id] = e.target.value;
        setData(newData)
    }

    function submit(e) {
        // history('/calculator')
        e.preventDefault();
        axios.post(url, {
            email: data.email,
            password: data.password
        }).then(res => {
            if(res.data){
                setStatus("")
            history('/calculator')
            }
            else{
                setStatus("Email or Password is Wrong!")
            }

        })
    }
    return (
        <div  className="container" > 
          
         <Form className ="design" onSubmit={submit}>
            <h2 style={{marginTop:"40px"}}>LOGIN PAGE</h2>
            <div   style={{fontWeight:"bold",marginBottom:"20px", marginTop:"20px",color:"rgb(60, 60, 232)", fontSize:"30px"}}>{status}</div>
            <Form.Group className="mb-3"  >
                <Form.Label>Email address</Form.Label>
                <Form.Control style={{width:"300px", borderRadius:"10px"}} onChange={(e) => handle(e)} id="email" value={data.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3"  >
                <Form.Label>Password</Form.Label>
                <Form.Control style={{width:"300px", borderRadius:"10px"}} onChange={(e) => handle(e)} id="password" value={data.password} type="password" placeholder="Password" />
            </Form.Group>

            
            <Button style={{backgroundColor:"rgb(7, 7, 7)", fontWeight:"bold", borderRadius:"10px"}} type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

