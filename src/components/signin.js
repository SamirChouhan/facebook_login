import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import Home from './home'
// import Signin from './signin';
import '../css/signup.css'
import {
    BrowserRouter as Router, Routes,
    Route,
    Link
} from "react-router-dom";

export default function Signin() {
    const [data, setData] = useState({
        name: "",
        email: "",
    });
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    // e.preventDefault();
    function rout(data){
        if (data) {
            // <Link className="link" to={"/home"}></Link>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        }
    }
    function submit(e) {
        Axios.post('http://localhost:3000/student/signin', {
            name: data.name,
            email: data.email,
        })
            .then(res => {
                console.log(res.data);
                alert("Data is valid");
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
                    <button className='button' onClick={(e) => submit(e)} onChange={(e)=>rout(e)}>Sign In</button>
                    <a className='a'>Forgotten password?</a>&nbsp;<Link className="link" to={"/signup"}>Sign Up</Link>
                    {/* &nbsp;<a className='a' style={{"text-decoration":"Underline"}} href="/signin" src="./signin">Sign in</a> */}
                    <hr></hr>
                    <button className='button1'>Create New Account</button>
                </div>
                <span className='span'><a href='#'>Create a Page</a> for a celebrity, brand or business</span>
            </div>

        </div>
    )
}
