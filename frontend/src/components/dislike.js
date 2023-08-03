import axios from "axios";
import React, { useState } from "react";
export default function Dislike(props) {
  const [status, setStatus] = useState(false);
  const addDislike = () => {
    axios
      .post("/add-dislike", { id: props.trackId })
      .then((_r) => {
        props.update("dislike");
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  const removeDislike = () => {
    axios
      .post("/remove-dislike", { id: props.trackId })
      .then((_r) => {
        props.update(false);
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  return (
    <button
      className={`love-button pointer ${props.classList}`}
      onClick={() => {
        if (!status) {
          addDislike();
        } else {
          removeDislike();
        }
        setStatus(!status);
      }}
    >
      <p>{status ? "Remove hate" : "I hate this song"}</p>
    </button>
  );
}
