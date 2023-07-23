import React, { useState } from "react";
// import SpotifyPlaylist from "./spotifyPlayer";
import Radio from "./radio";
import Chat from "./chat";
import './index.css'

export default function Index() {
  const [showRadio, setshowRadio] = useState(true);
  const [showChat, setshowChat] = useState(false);
  return (
    <div className="home-wrapper">
      <div className="action-buttons">
        <button onClick={() => setshowRadio(true)} className="pointer">
          Radio
        </button>
        <button onClick={() => setshowChat(true)} className="pointer">
          Chat
        </button>
      </div>
      {showRadio && <Radio closeRadio={() => setshowRadio(false)} id="radio" />}
      {showChat && <Chat closeChat={() => setshowChat(false)} id="chat" />}
    </div>
  );
}
