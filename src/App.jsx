import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Main from './Page/Main'
import RootLayOut from './Components/RootLayOut'
import Home from './Page/Home'
import AboutUs from './Page/AboutUs'
import Login from './Page/Login'
import Singup from './Page/Singup'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayOut/>}>
    <Route index element={<Main/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/singup" element={<Singup/>}></Route>
  </Route>
))

function App() {

  return (
    <>

    <RouterProvider router={router}/>

    </>
  )
}

export default App
