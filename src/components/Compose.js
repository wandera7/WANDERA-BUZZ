import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PostContext } from "../context/Post";


function Compose (){
    const [newData,setData]=useState({
        title:"",
        content:" ",
        img:" ",
        author:" "
    })
    const {addPost,isLoggedIn}=useContext(PostContext)
//Handles onChange event listener
    function handleChange(e){
        setData({...newData,[e.target.name]:e.target.value})
    }
//Handles Form Submit
    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/articles',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'},
            body:JSON.stringify({
                title:newData.title,
                content:newData.content,
                img:newData.img,
                author:newData.author
            })
        })
        .then((r)=>r.json())
        .then((data)=>addPost(data))
        setData({...newData,title:'',content:' ',img:' ',author:' '})
    }


    if (!isLoggedIn) return <Redirect to="/login" />
    return (
    <div>
     <h2 className="title">Compose a new Article</h2>
    <Form onSubmit={handleSubmit} className="composeform" >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>TITLE</Form.Label>
        <br/>
        <Form.Text className="text-muted">
        Enter Article Title
        </Form.Text>
        <Form.Control onChange={handleChange} type="text" value={newData.title} name="title"  />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput2 ">
        <Form.Label>IMAGE_URL</Form.Label>
        <br/>
        <Form.Text className="text-muted">
         Paste Image address 
        </Form.Text>
        <Form.Control type="text" onChange={handleChange} value={newData.img} name="img"   />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
        <Form.Label>NAME</Form.Label>
        <br/>
        <Form.Text className="text-muted">
        Enter your Name
        </Form.Text>
        <Form.Control onChange={handleChange} type="text" value={newData.author} name="author"  />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label>CONTENT</Form.Label>
        <br/>
        <Form.Text className="text-muted">
        Enter Article Content here
        </Form.Text>
        <Form.Control as="textarea"  onChange={handleChange} value={newData.content} name="content" rows={6} />
      </Form.Group>

      <Button variant="dark" type="submit">
        Publish
      </Button>
    </Form>
    </div>
    )
}
export default Compose