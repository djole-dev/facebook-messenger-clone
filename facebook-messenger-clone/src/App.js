import {
  Button,
  FormControl,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import Logo from "./assets/logo.png";
import SendIcon from "@material-ui/icons/Send";

import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import Message from "./Message";


function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");


 



  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please eneter your name"));
  }, []);

  const sendMessage = (event) => {
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <img src={Logo} />
      <h1> Facebook Messenger </h1>
      <h2>Welcome, {username}</h2>

      <form onSubmit={onSubmit} className='app__form'>
        <FormControl className="app__formControl">
          
          <Input className="app__input" placeholder="Enter a message.." value={input} onChange={(e) => setInput(e.target.value)} />

          <IconButton
          className="app__iconButton"
            disabled={!input}
            variant='contained'
            color='primary'
            type='submit'
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove className="app__messages">
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
