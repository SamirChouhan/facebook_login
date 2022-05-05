import './App.css';
import Signup from './components/signup'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Signin from './components/signin';
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  useEffect(()=>{
    setShow(true)
  })
  return (
    <>
    {/* <Signup />
    <Signin /> */}
      
        <Routes>
          {/* <Signup /> */}
          {/* <Route exact path="/" /> */}
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      {/* <Signup/> */}
    </>
  );
}

export default App;
