import React from 'react'
import Nav from '../../Component/Header/Nav'
import Subnav from '../../Component/Subnav'
import { Outlet } from 'react-router-dom'
import Footer from '../../Component/Footer'
const AppLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Subnav/>
      <Outlet/> 
      <Footer></Footer>
    </div>
  )
}

export default AppLayout
