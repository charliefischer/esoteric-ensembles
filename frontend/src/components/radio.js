import React, { useEffect, useRef, useState } from "react";
import "./radio.css";
import Arrows from "./arrows";
import Play from "./play";
import CloseIcon from "./closeIcon";
import Draggable from "react-draggable";
import Like from "./like";
import axios from "axios";
import Dislike from "./dislike";

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
  const [songLikes, setSongLikes] = useState(0);
  const [songDislikes, setSongDislikes] = useState(0);

  const getSongLove = () => {
    getSongDislikes()
    getSongLikes
()  }

  const getSongLikes = () => {
    axios
      .get('/song-likes/1')
      .then(r => {
        console.log(r)
        setSongLikes(r.data.total_likes)
      })
      .catch(e => {
        console.log('Error Collecting Song Likes: ', e)
      })
  }
  const getSongDislikes = () => {
    axios
      .get('/song-dislikes/1')
      .then(r => {
        console.log(r)
        setSongDislikes(r.data.total_dislikes)
      })
      .catch(e => {
        console.log('Error Collecting Song Dislikes: ', e)
      })
  }

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setTotalTime(audio.duration);
    };

    getSongLove();

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
            <div onClick={() => prevTrack()} className="pointer">
              <Arrows />
            </div>
            <div onClick={() => playTrack()}  className="pointer">
              <Play />
            </div>
            <div onClick={() => nextTrack()}  className="pointer">
              <Arrows classes="flip" />
            </div>
          </div>
          <div className="progress-bar">
            <audio ref={audioRef} id="audio" src={trackList[currentIndex]} />
            <div>
              {currentTime.toFixed(2)} / {totalTime.toFixed(2)}
            </div>
          </div>
          <Like update={() => getSongLove()} />
          <Dislike update={() => getSongLove()} />
          <div>Like Count:</div>
          <div>{songLikes}</div>
          <div>Hate Count:</div>
          <div>{songDislikes}</div>
        </div>
      </div>
    </Draggable>
  );
}
