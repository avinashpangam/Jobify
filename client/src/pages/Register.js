import React from "react";
import { useState, useEffect } from "react";
import { Logo, FormRow,Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import {useNavigate} from 'react-router-dom'
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,

};
function Register() {
  const [values, setValues] = useState(initialState);

  const {user,displayAlert,showAlert,isLoading,registerUser,setupUser}=useAppContext()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }

    const currentUser={name,email,password}
    if(isMember){
      // console.log("Already a member")
      setupUser({currentUser,
        endPoint:'login'
       })
    }
    else
    {
      setupUser({
        currentUser,
        endPoint:'register'
      })
    }
    
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

    const navigate = useNavigate()
  
    useEffect(() => {
      if (user) { 
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }
    }, [user, navigate])
  



  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{!values.isMember ? 'Register' : 'Login'}</h3>
        {showAlert && <Alert/>}
       
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            LabelText="name"
            val={values.name}
            handleChange={handleChange}
          />
        )}
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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
        {!values.isMember ? 'Register' : 'Login'}
        </button>
        <p>
      {values.isMember ? 'Not a member yet?' : 'Already a member?'}

      <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Register' : 'Login'}
      </button>
    </p>

      </form>
    </Wrapper>
  );
}

export default Register;
