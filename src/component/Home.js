import React from 'react'
import '../App.css'
import { BiMessageDetail } from 'react-icons/bi';
import { BiSearch } from   'react-icons/bi';
const Home = () => {
  return (
    <div className='home'>
        <div className='hi'>
        <h1 className='h1'>To do's</h1>
        <div className='k' style={{display:"flex", flexDirection:"row-reverse", backgroundColor:"white", padding:"10px", borderRadius:"8px", height:"48px"}}>
        <input style={{borderWidth:"0"}} type="text"  className='search' name="search" placeholder='search'/>
        < BiSearch size={30}  style={{marginTop:"10px"}}/>
        </div>
         <nav className='nav'>
            <li className='l1'>All</li>
            <li className='l2'>Mine</li>
            <li className='l3'>Assistant </li>
            
         </nav>
         </div>
        <div className='div1'>
           <p> Resolve frontend bugs </p>
            <p className='icon'><BiMessageDetail/></p>
        </div>
        <div className='div'>
            Resolve frontend bugs
            <input type="checkbox" id="topping" name="topping" value="Paneer" style={{margin}} />
        </div>
        <div className='div'>
            Resolve frontend bugs
        </div>
        <div className='div'>
            Resolve frontend bugs
        </div>


    </div>
  )
}

export default Home