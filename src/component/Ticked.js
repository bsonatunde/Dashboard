import React from 'react'
import '../App.css'
import logo from '../Image/logo.png'

const Ticked = () => {
  return (
    <div className='tick'>
        <nav>
        <img  src={logo} />
            <button className='button'>New to do </button>

                    <ul>
                      <li>Home</li>
                      <li>Notification</li>
                      <li>Assistant</li>
                    </ul>
         </nav>
    </div>
  )
}

export default Ticked