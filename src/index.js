import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from './context/Post';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
  <PostProvider>
    <App />
  </PostProvider>
  </Router>

);

