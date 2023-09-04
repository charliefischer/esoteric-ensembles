import React, { useState } from "react";
import Radio from "./radio";
import Chat from "./chat";
import "./index.css";
import Username from "./username";
import axios from "axios";

export default function Index() {
  const [showRadio, setshowRadio] = useState(true);
  const [showChat, setshowChat] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [user, setUser] = useState(false);

  const handleSetUser = (username) => {
    axios
      .get("/user-by-name/" + username)
      .then((r) => {
        setUser({
          user_id: r.data[0],
          username: r.data[1],
        });
      })
      .catch((e) => {
        console.error("Error", e);
      });
  };
  return (
    <div className="home-wrapper">
      <div className="action-buttons">
        <button onClick={() => setshowRadio(true)} className="pointer">
          Radio
        </button>
        <button
          onClick={() => {
            setshowChat(true);
            setShowNewUser(true);
          }}
          className="pointer"
        >
          Chat
        </button>
      </div>
      {showNewUser && !user && (
        <Username
          closeUser={() => setShowNewUser(false)}
          setUser={(e) => {
            handleSetUser(e);
            setShowNewUser(false);
          }}
        />
      )}
      {showRadio && <Radio closeRadio={() => setshowRadio(false)} id="radio" />}
      {user && showChat && (
        <Chat closeChat={() => setshowChat(false)} id="chat" user={user} />
      )}
    </div>
  );
}
