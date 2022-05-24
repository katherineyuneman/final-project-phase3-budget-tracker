import React from 'react'
import { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { PopupCheckout } from '../styled-components/styleIndex'
import { UserContext, UserProvider } from '../context/user'
import { MessageContext, MessageProvider } from '../context/message'

function Login() {

    const { user, setUser } = useContext(UserContext);
    const { message, setMessage } = useContext(MessageContext);

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

      fetch('http://localhost:9292/login', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            email: userLoginInputs.email,
            password: userLoginInputs.password
        })
        })
        .then(resp => {
            if (resp.status === 200) {
                return resp.json()
                .then(data => {
                    setUser(data.user)
                    setMessage({message: data.message, status: "Successfully logged in"})
                    history.push("budgets")
                })
            } else resp.json()
                .then(error => {console.log("hihi", error)
                    // setUserLoginInputs({
                    //     email:"",
                    //     password:""
                    // })
                    
                    setMessage({message: error.message, status:"issue"})
                    console.log("message", message)
                })
                .catch(error => setMessage({message: error, status:"other error"})) 
            }
        )
        
  }



  return (
    <PopupCheckout>
    <div>Login with your email and password.</div>
    <p>{user ? {user} : null}</p>
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

export default Login;
