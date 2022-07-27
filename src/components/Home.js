import React, { useContext } from "react";
import { Redirect }from "react-router-dom"
import { PostContext } from "../context/Post";
import IndividualPost from "./IndividualPost";

function Home(){
    const {posts,isLoggedIn}=useContext(PostContext)
    if (!isLoggedIn) return <Redirect to="/login" />;
    return (
        <>
        <h1 className="title" >Recent Articles</h1>
      {posts.map((post)=>{
        return <IndividualPost key={post.id} post={post}/>
      })}
      </>
    )
}
export default Home