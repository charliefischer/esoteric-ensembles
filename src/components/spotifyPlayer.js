import React from "react";
import boombox from "../assets/boombox/boombox.png";
import play from "../assets/boombox/play.png";
import pause from "../assets/boombox/pause.png";
import wheel from "../assets/boombox/wheel.png";
import "./spotifyPlayer.css";

const SpotifyPlaylist = () => {
  const startAnimation = () => {
    document.querySelectorAll(".wheel").forEach((node) => {
      if (node.classList.contains("animate")) return;
      node.classList.add("animate");
    });
  };
  const stopAnimation = () => {
    document.querySelectorAll(".wheel").forEach((node) => {
      if (!node.classList.contains("animate")) return;
      node.classList.remove("animate");
    });
  };
  return (
    <>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO2eXvV9?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title="spotify-player"
      ></iframe>
      <div className="boombox-wrapper relative">
        <img src={boombox} alt="bb" />
        <img src={pause} alt="bb" className="absolute pause pointer" onClick={stopAnimation} />
        <img src={play} alt="bb" className="absolute play pointer" onClick={startAnimation} />
        <img src={wheel} alt="bb" className="absolute wheel left" />
        <img src={wheel} alt="bb" className="absolute wheel right" />
      </div>
    
    </>
  );
};

export default SpotifyPlaylist;
