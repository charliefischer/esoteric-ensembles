import axios from "axios";
import React, { useState } from "react";
export default function Like(props) {
  const [status, setStatus] = useState(false);
  const addLike = () => {
    axios
      .post("/add-like", {id: 1})
      .then((r) => {
        console.log(r);
        props.update()
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  const removeLike = () => {
    axios
      .post("/remove-like", {id: 1})
      .then((r) => {
        console.log(r);
        props.update()
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  return (
    <div
      onClick={() => {
        if (!status) {
          addLike();
        } else {
          removeLike();
        }
        setStatus(!status);
      }}
    >
      <p>{status ? "Liked" : "Like"}</p>
    </div>
  );
}
