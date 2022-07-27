import React, { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom"
import { PostContext } from "../context/Post";

function LoginForm() {
  const {setIsLoggedIn}=useContext(PostContext)
    const history = useHistory();
    const [loginForm,setLogInForm]=useState({
        email:'',
        password:''
    })
    //Hnadles change in form
    function handleChange(e){
        setLogInForm({...LoginForm,[e.target.name]:e.target.value})
    }
    //Handles submitting login
    function handleSubmit(e){
        e.preventDefault()
        setIsLoggedIn(true)
        history.push("/")
        setLogInForm()
    }
   return (
    <div>
    <div className="loginnav">
     <h1 className="loginlogo" >WANDERA BUZZ</h1>
    </div>
    
    <Form className="loginform" onSubmit={handleSubmit} >
    <h1>Log In</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={handleChange} value={loginForm.email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  onChange={handleChange} value={loginForm.password}  placeholder="Password" />
      </Form.Group>
      
      <Button variant="dark" type="submit">
        Login
      </Button>
    </Form>

    </div>
  );
}

export default LoginForm;