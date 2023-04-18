import React,{useSate }from 'react'
import { auth } from "./Firebase";
import './Friends.css'
import { useAuthState } from "react-firebase-hooks/auth";
const mySet1 = new Set();
const Friends = ({ message }) => {
    console.log(message.avatar)
    const [user] = useAuthState(auth);
  return (
    <div className='container'>
      {message.uid !== user.uid && message.avatar ?( <img
        className="chat-bubble__left"
        src={message.uid !== user.uid && message.avatar}
        alt="user avatar"
      />):(null)}
       {message.avatar?(<div className="chat-bubble__right">
        <p className="user-name">{message.uid !== user.uid && message.name}</p>
        <p className='msg'>{message.uid !== user.uid && message.text}</p>
      </div>
     ):(null)}
    </div>
  )
}

export default Friends