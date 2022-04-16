import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaHome, FaAlignLeft,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import Logo from './Logo'
import {useAppContext} from '../context/appContext'
const Navbar = () => {
  return (
    <Wrapper>
        <div className='nav-center'>
          <button className='toggle-btn'
            onClick={()=>{console.log("i got clicked")}}
          >
          <FaAlignLeft/>
         </button>
         <div>
           <Logo/>
           <h3 className='logo-next'>dashboard</h3>
         </div>
         
           <div className='btn-container' >
                <button
                type="button" className='btn' onClick={()=>{console.log("show/hide")}} >
                  <FaUserCircle/>
                  User

                  <FaCaretDown/>
                </button>
                <div className='dropdown show-dropdown'>
                <button type='button' className='dropdown-btn' onClick={()=>{console.log("clicked/logout")}}>Logout</button>

                </div>
           </div>
         </div>
        
    </Wrapper>
  )
}

export default Navbar