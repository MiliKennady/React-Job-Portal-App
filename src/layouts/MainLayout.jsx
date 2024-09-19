import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function MainLayout() {
  return (
    <>
        <Navbar />
        <Outlet />
        {/* check out what this outlet does */}
        <ToastContainer />
    </>
  )
}

export default MainLayout
