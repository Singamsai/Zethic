import React from 'react'
import "./navbar.css"
import {AiFillCaretDown} from 'react-icons/ai'

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='navbar'>
      <h1>Discover <br/>Plots</h1>
      <div className='navbar_opt'>
        <p className='projects'>Projects  <AiFillCaretDown/></p>
        <p>Agents</p>
        <p>Amenities</p>
        <p>|</p>
        <p>Sign In</p>
        <button>Schedule a Call</button>
      </div>
    </div>
    </div>
  )
}
