import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ReadMore(){  
    const[post,setPost]=useState({})
    const params = useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/articles/${params.id}`)
        .then((r)=>r.json())
        .then((data)=>setPost(data))
    },[params.id])
    return(
        <div>
        <img className="blogimg" src={post.img} alt="Post"/>
        <h2 className="text" >{post.title}</h2>
        <p className="txt">
            {post.content}
        </p>
        <h5 className="txt">By:{post.author}</h5>

      </div>
    )
}
export default ReadMore