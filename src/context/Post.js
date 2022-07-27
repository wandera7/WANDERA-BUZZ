import React, { createContext, useEffect, useState } from "react";

const PostContext=createContext()

function PostProvider({children}){

    const [posts,setPosts]=useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    useEffect(()=>{
        fetch(`https://buzzdb.herokuapp.com/articles`)
        .then((r)=>r.json())
        .then((data)=>setPosts(data))
    },[])



// Add Post Function
    function addPost(postObj){
        setPosts([...posts,postObj])
    }

    
// Delete Post Function
    function deletePost(id){
        setPosts((prevValue)=>{
            return prevValue.filter((article)=>{
                return article.id !==id
            })
        })
    }

    const value={posts,addPost,deletePost,isLoggedIn,setIsLoggedIn}

    return (
        <PostContext.Provider value={value} >
        {children}

        </PostContext.Provider>
    )
}

export {PostContext,PostProvider}