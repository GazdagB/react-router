import React from 'react'
import { useState,useEffect } from 'react'
import SinglePost from '../components/SInglePost'

const Posts = () => {

    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err));
    },[])

  return (
    <div>
    <h1>This is the Posts Page ✉️😗</h1>
    
    {
        post.map((p,idx)=>{
            return <SinglePost key={idx} title={p.title} body={p.body}/>

        })
    }

    </div>

  )
}

export default Posts