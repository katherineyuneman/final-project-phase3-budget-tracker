import React from 'react'
import { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { PopupCheckout } from '../styled-components/styleIndex'
import { UserContext } from '../context/user'
import { MessageContext } from '../context/message'

function Login() {

    const {setUser} = useContext(UserContext);
    const {setMessage} = useContext(MessageContext);


    const [userLoginInputs, setUserLoginInputs] = useState ({
        email:"",
        password:""
    })

    const history = useHistory()

    const handleInputChange = e => {
       setUserLoginInputs({
           ...userLoginInputs,
           [e.target.name]: e.target.value})
    }

  const handleSubmit = e => {
      e.preventDefault()
      console.log(e.target.value)


      fetch('http://localhost:9292/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(userLoginInputs)
        })
        .then((data) => {
            setUserLoginInputs(data.user)
            history.push("/budgets")
        })
        .catch(err => alert(err))
        
  }

  return (
    <PopupCheckout>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <div>Login with your email and password.</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email
          <input onChange={handleInputChange} type="text" name="email" value={userLoginInputs.email} required />
        </label>
        <br/>
        <label htmlFor='password'>Password
          <input onChange={handleInputChange} type="password" name="password" value={userLoginInputs.password} required />
        </label>
        <br/>
          <button>Login</button>
    </form>
    </PopupCheckout>
  )
}

export default Login
