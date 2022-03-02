import React from 'react'
import { useState,useEffect } from 'react'
import { Logo,FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'


const initialState={
    name:'',
    email:'',
    password:'',
    isMember:true
}
function Register() {
    const [values, setValues] = useState(initialState)
    const handleChange = (e) => {
        console.log(e.target)
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
      }
  return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>Login</h3>
           <FormRow
               type="text"
               name="name"
               LabelText="name"
               val={values.name}
               handleChange={handleChange}
           />
            <FormRow
               type="email"
               name="email"
               LabelText="name"
               val={values.email}
               handleChange={handleChange}
           />
            <FormRow
               type="password"
               name="password"
               LabelText="name"
               val={values.password}
               handleChange={handleChange}
           />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        </form>
    </Wrapper>
  )
}

export default Register