import React, { useState, useEffect ,useRef} from "react";
import "./Chat.css";
import { AiOutlineLogout } from "react-icons/ai";
import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "./Firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import Friends from "./Friends";
const Chat = ({ signout, user }) => {
  const [message, setMessage] = useState([]);
  const scroll = useRef();
  const { uid, displayName, photoURL } = auth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, "message"),
      orderBy("createdAt"),
      limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return data;
  }, []);

  return (
    <div className="Container">
      <div className="header">
        <h4>Welcome {displayName}</h4>
        <div className="nav-left">
          <img src={photoURL} alt="user" className="photo"/>
        <button type="submit" className="sign-out" onClick={signout}>
          <AiOutlineLogout /> Logout
        </button>
        </div>
      </div>
      <div className="chat-body">
        <div className="names">
          <h4>Your Chats</h4>
        {message?.map((message) => (
          <Friends key={message.id} message={message} />
        ))}
        </div>
        <main className="chat-box">
        {message?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
     
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div  */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
     
    </main>
      </div>
    </div>
  );
};

export default Chat;
