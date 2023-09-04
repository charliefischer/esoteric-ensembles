import React, { useEffect, useRef, useState } from "react";
import "./radio.css";
import Arrows from "./arrows";
import Play from "./play";
import CloseIcon from "./closeIcon";
import Draggable from "react-draggable";
import Like from "./like";
import axios from "axios";
import Dislike from "./dislike";
import trackData from "../assets/tracks/trackData";
import Pause from "./pause";

let currentIndex = 0;

export default function Radio(props) {
  const audioRef = useRef(null);
  const [trackLoveStatus, setTrackLoveStatus] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playTrack = () => {
    const audio = audioRef.current;
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const nextTrack = () => {
    const audio = audioRef.current;
    audio.pause();
    currentIndex =
      currentIndex + 1 > trackData.length - 1 ? 0 : currentIndex + 1;
    console.log(trackData[currentIndex].src);
    audio.src = trackData[currentIndex].src;
    // not idea but works
    playAndGetSongStats(audio);
  };

  const prevTrack = () => {
    const audio = audioRef.current;
    audio.pause();
    currentIndex =
      currentIndex - 1 < 0 ? trackData.length - 1 : currentIndex - 1;
    console.log(trackData[currentIndex].src);
    audio.src = trackData[currentIndex].src;
    audio.load();
    // not ideal but works
    playAndGetSongStats(audio);
  };

  const playAndGetSongStats = (audio) => {
    setTimeout(() => {
      audio.play();
      getSongLove();
    }, 1000);
  };

  const nodeRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [songLikes, setSongLikes] = useState(0);
  const [songDislikes, setSongDislikes] = useState(0);

  const getSongLove = () => {
    getSongDislikes();
    getSongLikes();
  };

  const getSongLikes = () => {
    axios
      .get(`/song-likes/${trackData[currentIndex].id}`)
      .then((r) => {
        setSongLikes(r.data.total_likes);
      })
      .catch((e) => {
        console.log("Error Collecting Song Likes: ", e);
      });
  };
  const getSongDislikes = () => {
    axios
      .get(`/song-dislikes/${trackData[currentIndex].id}`)
      .then((r) => {
        setSongDislikes(r.data.total_dislikes);
      })
      .catch((e) => {
        console.log("Error Collecting Song Dislikes: ", e);
      });
  };

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

  const fetchSongData = async () => {
    const audio = audioRef.current;

    // Convert the audio data into a Blob
    const blob = new Blob([audio.src], { type: "audio/mpeg" });

    const reader = new FileReader();
    reader.onload = async () => {
      const base64String = reader.result.split(",")[1];
      axios
        .get(`/get-song`, {
          audio: base64String,
        })
        .then((r) => {
          console.log("Shazam res", r);
        })
        .catch((e) => {
          console.error("Shazamm error", e);
        });
    };

    // Read the Blob as Data URL (which is a Base64 encoded string)
    reader.readAsDataURL(blob);
  };

  useEffect(() => {
    fetchSongData();
  }, [currentIndex]);

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
            <div onClick={() => playTrack()} className="pointer">
              {!playing && 
                <Play />
              }
              {playing &&
                <Pause />
              }
            </div>
            <div onClick={() => nextTrack()} className="pointer">
              <Arrows classes="flip" />
            </div>
          </div>
          <div className="progress-bar">
            <audio
              ref={audioRef}
              id="audio"
              src={trackData[currentIndex].src}
            />
            <div className="time-progress">
              {currentTime.toFixed(2)} / {totalTime.toFixed(2)}
            </div>
          </div>
          <div className="flex love-wrapper">
            <div className="flex-col love-count">
              <Like
                update={(status) => {
                  setTrackLoveStatus(status);
                  getSongLove();
                }}
                classList={trackLoveStatus === "dislike" ? "none" : ""}
                trackId={trackData[currentIndex].id}
              />
              <div>{songLikes}</div>
            </div>
            <div className="flex-col hate-count">
              <Dislike
                update={(status) => {
                  setTrackLoveStatus(status);
                  getSongLove();
                }}
                classList={trackLoveStatus === "like" ? "none" : ""}
                trackId={trackData[currentIndex].id}
              />
              <div>{songDislikes}</div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
