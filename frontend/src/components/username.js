import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
export default function Username(props) {
  const nodeRef = useRef(null);
  const [user, setUser] = useState(false);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="chat-container" ref={nodeRef}>
        <div className="chat-wrapper">
          <nav>
            <div
              className="close-icon pointer"
              onClick={() => props.closeUser()}
            >
              <CloseIcon />
            </div>
          </nav>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Username"
              className="new-message-input"
              onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={() => props.setUser(user)}>Set User</button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
