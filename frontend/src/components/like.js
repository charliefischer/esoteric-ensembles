import axios from "axios";
import React, { useState } from "react";
export default function Like(props) {
  const [status, setStatus] = useState(false);
  const addLike = () => {
    axios
      .post("/add-like", { id: props.trackId })
      .then((_r) => {
        props.update("like");
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  const removeLike = () => {
    axios
      .post("/remove-like", { id: props.trackId })
      .then((_r) => {
        props.update(false);
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  return (
    <div
      className={`pointer ${props.classList}`}
      onClick={() => {
        if (!status) {
          addLike();
        } else {
          removeLike();
        }
        setStatus(!status);
      }}
    >
      <p>{status ? "Remove love" : "I love this song"}</p>
    </div>
  );
}
