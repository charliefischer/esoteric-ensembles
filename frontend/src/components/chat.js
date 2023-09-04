import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./chat.css";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
export default function Chat(props) {
  const nodeRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [usernames, setUsernames] = useState({});
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios
      .get("/messages")
      .then((response) => {
        setMessages(response.data);
        findUsernames();
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  };

  const sendNewMessage = (msg, user_id) => {
    axios
      .post("/messages", {
        sender_id: user_id,
        content: msg,
      })
      .then((_response) => {
        getMessages();
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const findUsernames = () => {
    axios
      .get("/users")
      .then((r) => {
        const users = {};
        r.data.forEach((user) => {
          users[user[0]] = user[1];
        });
        setUsernames(users);
      })
      .catch((e) => {
        console.error("Error finding usersnames: ", e);
      });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear().toString().slice(-2); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} - ${hours}:${minutes}`;

    return formattedDate
  }

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
                {usernames[msg[1]]}..{msg[2]}..{formatDate(msg[3])}
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
            {props.user.user_id && (
              <button
                className="send-new-message pointer"
                onClick={() => {
                  sendNewMessage(newMessage, props.user.user_id);
                  setNewMessage("");
                }}
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
