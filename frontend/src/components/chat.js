import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
export default function Chat(props) {
  const nodeRef = useRef(null);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    // Fetch data from the back-end API
    console.log("start");
    axios
      .get("/messages")
      .then((response) => {
        // Update the 'users' state with the data received from the server
        console.log("res", response.data);
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

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
              <div key={msg[3]}>{msg[2]}..{msg[3]}</div>
            ))}
          </div>
          <div className="new-message-wrapper">
            <div className="message-box">
              <input
                type="text"
                placeholder="Your Message..."
                className="new-message-input"
              />
            </div>
            <button className="send-new-message pointer">Send</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
