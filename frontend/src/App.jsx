import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Header from "./components/header/Header.jsx"
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import Verify from './pages/auth/Verify.jsx'
import Footer from './components/footer/Footer.jsx'
import About from './pages/about/About.jsx'
import Account from './pages/account/Account.jsx'
import { UserData } from './context/UserContext.jsx'
import Loading from './components/loading/Loading.jsx'
import Courses from './pages/courses/Courses.jsx'
// import { Userdata } from './context/UserContext.jsx'

const App = () => {
  const {isAuth, user,loading}= UserData()
  // const {user} = Userdata()
  // console.log(user)
  return (
    <>
    {loading?<Loading/>:<BrowserRouter>
    <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/account" element={isAuth?<Account user={user}/>:<Login/>}/>
          <Route path="/login" element={isAuth?<Home/>:<Login/>}/>
          <Route path="/register" element={isAuth?<Home/>:<Register/>}/>
          <Route path="/verify" element={isAuth?<Home/>:<Verify/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>}
    </>
  )
}

export default App