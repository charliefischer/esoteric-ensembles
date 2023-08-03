import React, { useState } from "react";
// import SpotifyPlaylist from "./spotifyPlayer";
import Radio from "./radio";
import Chat from "./chat";
import "./index.css";
import Username from "./username";

export default function Index() {
  const [showRadio, setshowRadio] = useState(true);
  const [showChat, setshowChat] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="action-buttons">
        <button onClick={() => setshowRadio(true)} className="pointer">
          Radio
        </button>
        <button onClick={() => setShowNewUser(true)} className="pointer">
          Chat
        </button>
      </div>
      {showNewUser && (
        <Username
          closeUser={() => setShowNewUser(false)}
          setUser={(e) => {
            setUser(e);
            setShowNewUser(false);
          }}
        />
      )}
      {showRadio && <Radio closeRadio={() => setshowRadio(false)} id="radio" />}
      {user && (
        <Chat closeChat={() => setshowChat(false)} id="chat" user={user} />
      )}
    </div>
  );
}
