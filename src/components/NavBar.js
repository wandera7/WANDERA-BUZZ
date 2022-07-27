import React, { useContext } from "react";
import { NavLink,useHistory,Redirect } from "react-router-dom";
import { PostContext } from "../context/Post";


//Styles navbar links
const linkStyles = {
    float:" right",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "12px",
    letterSpacing: "7px", 
    top: '0',
}


// Styles Logo
const logoStyle={
  float:"left",
  color: "#f2f2f2",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontSize: "22px",
  letterSpacing: "7px",
  marginLeft:"30px"

}


function NavBar() {
  const history = useHistory()
  const {isLoggedIn,setIsLoggedIn}=useContext(PostContext)
  if (!isLoggedIn) return <Redirect to="/login" />
  
  // Handles Logout 
  function logout(){
    history.push('/login')
    setIsLoggedIn(false)
  }


  return (
    <div className="topnav">
    <NavLink exact style={logoStyle} to='/'>WANDERA BUZZ</NavLink>  
    <button className="logout" onClick={logout} >LOG OUT</button>
    <NavLink exact style={linkStyles} activeStyle={{background:"grey"}}  to='/about'>ABOUT</NavLink> 
    <NavLink exact style={linkStyles} activeStyle={{background:"grey"}}  to='/compose'>COMPOSE</NavLink>
    <NavLink exact style={linkStyles} activeStyle={{background:"grey"}}  to='/'>HOME</NavLink>
 
 </div>
 
    )
}


export default NavBar;