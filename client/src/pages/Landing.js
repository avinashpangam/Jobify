import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage.js'
export const Landing = () => {
return (
    <Wrapper>
        <nav>
            <img src={logo} alt='jobify' className='logo'></img>
        </nav>
        <div className='container Page'>
            <div className='info'>
                <h1>
                    Job <span>Tracking</span> App
                </h1>
                <p>
                I'm baby butcher kogi ramps chartreuse. Enamel pin kombucha VHS quinoa chillwave gastropub next level paleo hashtag poke food truck. Gluten-free shoreditch tumeric, single-origin coffee readymade small batch jean shorts wolf
                </p>
                <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img' ></img>
        </div>
    </Wrapper>
)
}
