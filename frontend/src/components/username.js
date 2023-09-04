import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import CloseIcon from "./closeIcon";
import axios from "axios";
export default function Username(props) {
  const nodeRef = useRef(null);
  const [user, setUser] = useState(false);

  const handleUsername = (username) => {
    axios
      .get("/user-by-name/" + username)
      .then((r) => {
        props.setUser(username);
      })
      .catch((e) => {
        createNewUser(username);
      });
  };

  const createNewUser = (username) => {
    axios
      .post("/new-user", { username })
      .then((_r) => {
        props.setUser(username);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="chat-container" ref={nodeRef}>
        <div className="chat-wrapper username">
          <nav>
            <div
              className="close-icon pointer"
              onClick={() => props.closeUser()}
            >
              <CloseIcon />
            </div>
          </nav>
          <div className="flex username-input">
            <input
              type="text"
              placeholder="Enter Username"
              className="new-message-input"
              onChange={(e) => setUser(e.target.value)}
            />
            <button className="pointer" onClick={() => handleUsername(user)}>
              Set User
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
