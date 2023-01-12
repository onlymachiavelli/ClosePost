import React from "react"
import {} from './../components/svg'

import { Logo } from "../components/Logo"
import Navbar from "../components/navbar"

import RequestURL from "../components/Request.Url"
const Application = () => {
  return (
    <div>
      <nav className="w-full h-auto p-5">
        <Navbar/>
        <RequestURL/>
      </nav>
    </div>
  )
}
export default Application
