import React, { useRef } from "react";
import "./chat.css";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
export default function Chat(props) {
  const nodeRef = useRef(null);
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
          <div className="messages-wrapper"></div>
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
