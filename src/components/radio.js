import React, { useRef } from "react";
import './radio.css'
import Arrows from './arrows'
import Play from "./play";
import CloseIcon from "./closeIcon";
import Draggable from "react-draggable";

export default function Radio(props) {
  const audioRef = useRef(null);
  const tracks = require.context('../assets/songs', true);
  const trackList = tracks.keys().map(track => tracks(track))
  let currentIndex = 0

  const playTrack = () => {
    const audio = audioRef.current;
    audio.play();
  }

  const nextTrack = () => {
    const audio = audioRef.current;
    console.log(trackList, currentIndex)
    audio.pause()
    currentIndex = currentIndex + 1 > trackList.length - 1 ? 0 : currentIndex + 1
    audio.src = trackList[currentIndex];
    audio.play();
  }

  const prevTrack = () => {
    const audio = audioRef.current;
    console.log(trackList, currentIndex)
    audio.pause()
    currentIndex = currentIndex - 1 < 0 ? trackList.length - 1 : currentIndex - 1
    audio.src = trackList[currentIndex];
    audio.play();
  }

  const currentTrack = {}
  currentTrack.src = trackList[currentIndex]
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>

    <div className="media-container" id={props.id} ref={nodeRef}>
      <div className="media-wrapper">
        <nav>
          <div className="close-icon pointer" onClick={() => props.closeRadio()}><CloseIcon /></div>
        </nav>
        <div className="action-buttons-wrapper flex">
          <div onClick={() => prevTrack()}><Arrows /></div>
          <div onClick={() => playTrack()}><Play /></div>
          <div onClick={() => nextTrack()}><Arrows classes="flip" /></div>
        </div>
        <div className="progress-bar">
          <audio ref={audioRef} id="audio" src={currentTrack.src} />
        </div>
      </div>
    </div>
    </Draggable>
  );
}
