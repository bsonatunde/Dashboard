import React from 'react'
import '../App.css'
import act from '../Image/act.png'

const Activity = () => {
  return (
    <div className='act'>
         <h1>Activity</h1>
         <img  src={act} />
         <div className='box'>
          <div className='p'>
          <p >Log  </p>
          <p>Refreshes in 3h</p>
          </div>
         </div>
         
    </div>


  )
}

export default Activity