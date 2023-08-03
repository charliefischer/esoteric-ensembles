import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
export default function Chat(props) {
  const nodeRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios
      .get("/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  };

  const sendNewMessage = (msg) => {
    axios
      .post("/messages", {
        sender_id: 1,
        content: msg,
      })
      .then((_response) => {
        getMessages();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="chat-container" ref={nodeRef}>
        <div className="chat-wrapper">
          <nav>
            <div
              className="close-icon pointer"
              onClick={() => props.closeChat()}
            >
              <CloseIcon />
            </div>
          </nav>
          <div className="messages-wrapper">
            {messages.map((msg) => (
              <div key={msg[3]}>
                {msg[2]}..{msg[3]}
              </div>
            ))}
          </div>
          <div className="new-message-wrapper">
            <div className="message-box">
              <input
                type="text"
                placeholder="Your Message..."
                className="new-message-input"
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            {props.user && (
              <button
                className="send-new-message pointer"
                onClick={() => sendNewMessage(newMessage)}
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
