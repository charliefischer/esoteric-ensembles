import React, { useEffect, useRef, useState } from "react";
import "./radio.css";
import Arrows from "./arrows";
import Play from "./play";
import CloseIcon from "./closeIcon";
import Draggable from "react-draggable";

export default function Radio(props) {
  const audioRef = useRef(null);
  const tracks = require.context("../assets/songs", true);
  const trackList = tracks.keys().map((track) => tracks(track));
  let currentIndex = 0;

  const playTrack = () => {
    const audio = audioRef.current;
    audio.play();
  };

  const nextTrack = () => {
    const audio = audioRef.current;
    console.log(trackList, currentIndex);
    audio.pause();
    currentIndex =
      currentIndex + 1 > trackList.length - 1 ? 0 : currentIndex + 1;
    audio.src = trackList[currentIndex];
    audio.play();
  };

  const prevTrack = () => {
    const audio = audioRef.current;
    console.log(trackList, currentIndex);
    audio.pause();
    currentIndex =
      currentIndex - 1 < 0 ? trackList.length - 1 : currentIndex - 1;
    audio.src = trackList[currentIndex];
    audio.play();
  };

  const nodeRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setTotalTime(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  return (
    <Draggable nodeRef={nodeRef}>
      <div className="media-container" id={props.id} ref={nodeRef}>
        <div className="media-wrapper">
          <nav>
            <div
              className="close-icon pointer"
              onClick={() => props.closeRadio()}
            >
              <CloseIcon />
            </div>
          </nav>
          <div className="action-buttons-wrapper flex">
            <div onClick={() => prevTrack()}>
              <Arrows />
            </div>
            <div onClick={() => playTrack()}>
              <Play />
            </div>
            <div onClick={() => nextTrack()}>
              <Arrows classes="flip" />
            </div>
          </div>
          <div className="progress-bar">
            <audio ref={audioRef} id="audio" src={trackList[currentIndex]} />
            <div>
              {currentTime.toFixed(2)} / {totalTime.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
