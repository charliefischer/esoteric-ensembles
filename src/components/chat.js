import React, { useRef } from "react";
import './chat.css'
import Draggable from "react-draggable";
export default function Chat(props){
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div className="chat-container" ref={nodeRef}>
        <div className="chat-wrapper">

        </div>
      </div>
    </Draggable>
  )
}