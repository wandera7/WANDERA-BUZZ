import React ,{useState} from "react";
import LoginForm from "./components/Login";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import Compose from "./components/Compose";
import Home from "./components/Home";
import ReadMore from "./components/ReadMore";

function App() {
  
  return (
    <>
    <NavBar />
    <Switch>
        <Route exact path="/login">
        <LoginForm  />   
        </Route>
        <Route exact path="/about">
        <About  />    
        </Route>
        <Route exact path="/compose">
        <Compose  />   
        </Route>
        <Route  exact path="/">
        <Home   />  
        </Route>
        <Route exact path={`/articles/:id`}>
        <ReadMore  />
      </Route>
      </Switch>
    </>
  );
}

export default App;
