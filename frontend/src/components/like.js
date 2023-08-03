import React, { useState } from "react"
export default function Like (props) {
  const [status, setStatus] = useState(false)
  return (
    <div onClick={() => setStatus(!status)}>
      <p>{status ? "Liked" : "Like"}</p>
    </div>
  )
}