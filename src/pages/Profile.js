import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Profile = () => {

    //I store the url parameter into a variable -> username

    let {username} = useParams();   
    
    let navigate = useNavigate();

  return (
    <div>
        { (username) ? <h1>Welcome on the Page {username}! 👋🏻✌🏻😗</h1> : <h1>To Check your Profile you have to sign in! ✌🏻</h1> }
        <button onClick={()=> navigate('/')} >Back To The Home Page 🚀</button>
    </div>
  )
}

export default Profile