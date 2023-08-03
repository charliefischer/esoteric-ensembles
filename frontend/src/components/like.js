import axios from "axios";
import React, { useState } from "react";
export default function Like(props) {
  const [status, setStatus] = useState(false);
  const addLike = () => {
    axios
      .post("/add-like", { id: 1 })
      .then((r) => {
        props.update("like");
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  const removeLike = () => {
    axios
      .post("/remove-like", { id: 1 })
      .then((r) => {
        props.update(false);
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  return (
    <div
      className={props.classList}
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
