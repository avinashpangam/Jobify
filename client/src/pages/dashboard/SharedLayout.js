import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar,SideBar,BigSideBar } from '../../components/index.js'
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SideBar/>
        <BigSideBar/>
        <div>
          <Navbar/>
          <div className='dashboard-page'>
          <Outlet/>
          </div>
        </div>
      </main>
      
    </Wrapper>
  )
}

export default SharedLayout