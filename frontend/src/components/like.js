import axios from "axios";
import React, { useState } from "react";
export default function Like(props) {
  const [status, setStatus] = useState(false);
  const addLike = () => {
    axios
      .post("/like", {
        track_id: 1,
        status,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((error) => {
        console.error("Error changing like:", error);
      });
  };
  return (
    <div
      onClick={() => {
        setStatus(!status);
        addLike();
      }}
    >
      <p>{status ? "Liked" : "Like"}</p>
    </div>
  );
}
