import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test2 from './pages/Test2'
import Test from './pages/Test'
import Signup from './pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Graph from './pages/Graph'
import Signin from './pages/Signin'
import Graph2 from './pages/Graph2'
import Graph3 from './pages/Graph3'
import Aboutus from './pages/Aboutus'
import Traindetails from './pages/Traindetails'

function App() {
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/home" element={<Test2></Test2>} ></Route>
    <Route path="/test" element={<Test></Test>} ></Route>
    <Route path="/" element={<Signup></Signup>} ></Route>
    <Route path="/graph" element={<Graph></Graph>} ></Route>
    <Route path="/graph2" element={<Graph2></Graph2>} ></Route>
    <Route path="/graph3" element={<Graph3></Graph3>} ></Route>
    <Route path="/aboutus" element={<Aboutus></Aboutus>} ></Route>
    <Route path="/train" element={<Traindetails></Traindetails>} ></Route>


    <Route path="/signin" element={<Signin></Signin>} ></Route>



   </Routes>
   </BrowserRouter>
   </>
  )
  
}

export default App
