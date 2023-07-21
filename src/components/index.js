import React, { useState } from "react";
// import SpotifyPlaylist from "./spotifyPlayer";
import Radio from "./radio";
import Chat from "./chat";


export default function Index() {
  const [showRadio, setshowRadio] = useState(false)
  const [showChat, setshowChat] = useState(false)
  return (
    <div className="home-wrapper">
      <div onClick={() => setshowRadio(true)}>Radio</div>
      <div onClick={() => setshowChat(true)}>Chat</div>
      {showRadio && 
        <Radio closeRadio={() => setshowRadio(false)} id="radio" />
      }
      {showChat && 
        <Chat closeChat={() => setshowChat(false)} id="chat" />
      }
    </div>
  );
}