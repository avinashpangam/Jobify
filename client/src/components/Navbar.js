import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaHome, FaAlignLeft,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import Logo from './Logo'
import {useAppContext} from '../context/appContext'
const Navbar = () => {
  const {toggleSidebar,user,logoutuser}=useAppContext();
   const [showlogout,setshowlogout]=useState(false)
  return (
    <Wrapper>
        <div className='nav-center'>
          <button className='toggle-btn'
            onClick={toggleSidebar}
          >
          <FaAlignLeft/>
         </button>
         <div>
           <Logo/>
           <h3 className='logo-next'>dashboard</h3>
         </div>
         
           <div className='btn-container' >
                <button
                type="button" className='btn' onClick={() => {setshowlogout(!showlogout)} }>
                  <FaUserCircle/>
                  {user?.name}

                  <FaCaretDown/>
                </button>
                <div className={ showlogout ?'dropdown show-dropdown':'dropdown'}>
                <button type='button' className='dropdown-btn' onClick={logoutuser}>Logout</button>

                </div>
           </div>
         </div>
        
    </Wrapper>
  )
}

export default Navbar