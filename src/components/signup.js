import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
// import Signin from './signin';
import {
    BrowserRouter as Router,Routes,
    Route,
    Link
  } from "react-router-dom";
import '../css/signup.css'

export default function Login() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    // e.preventDefault();
    function submit(e) {
        Axios.post('http://localhost:3000/student', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address
        })
            .then(res => {
                console.log(res.data);
                // setSubmit(res.data.submit);
            })
            .catch(() => {
                console.log(data, "data");
            })
    }
    return (
        <div class="flex-container">
            <div className='text'>
                <div><img src='fb.svg'></img></div>
                <br></br>
                <h2 className='h5'>Facebook helps you connect and share with the people in your life.</h2>
            </div>
            <div className='div'>
                <div className='form'>
                    {/* <input type="text" placeholder='Email address or phone number'></input>
                    <input type="password" placeholder='Password' /> */}
                    <input type="text" placeholder='Name' onChange={(e) => handle(e)} id="name" value={data.name}></input>
                    <input type="email" placeholder='Email address' onChange={(e) => handle(e)} id="email" value={data.email}></input>
                    <input type="text" placeholder='Phone Number' onChange={(e) => handle(e)} id="phone" value={data.phone}></input>
                    <input type="text" placeholder='Address' onChange={(e) => handle(e)} id="address" value={data.address}></input>
                    {/* <input type="text" placeholder='userID'  id="userId" ></input>      
                    <input type="text" placeholder='title'  id="title" ></input>
                    <input type="text" placeholder='body'  id="body" ></input> */}
                    <button className='button' onClick={(e) => submit(e)}>Sign Up</button>
                    <a className='a'>Forgotten password?</a>&nbsp;<Link className="link" to={"/"}>Sign In</Link>
                    {/* &nbsp;<a className='a' style={{"text-decoration":"Underline"}} href="/signin" src="./signin">Sign in</a> */}
                    <hr></hr>
                    <button className='button1'>Create New Account</button>
                </div>  
                <span className='span'><a href='#'>Create a Page</a> for a celebrity, brand or business</span>
            </div>

        </div>
    )
}
