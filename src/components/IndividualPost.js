import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context/Post";      
function IndividualPost({post}){
    const {deletePost}=useContext(PostContext)
    const { id,title,content,img,author}=post
    const newContent=content.slice(0,30)
//Handles Deleting a post
    function handleDelete(){
        fetch(`http://localhost:3000/articles/${id}`,{
            method:'DELETE',
        })
        .then((r)=>r.json)
        .then(()=>deletePost(id))
    }

    return(
        <div className="card">
         <img src={img} alt="post"/>
        <div className="container">
         <h3><b>{title}</b></h3>
         <p className="content">{newContent}...<Link to={`/articles/${id}`}>ReadMore</Link></p>
         <h5>By:{author}</h5>
         <button className="deletebtn" onClick={handleDelete}>DELETE POST</button>
         </div>
         </div>
        )
    }
    export default IndividualPost