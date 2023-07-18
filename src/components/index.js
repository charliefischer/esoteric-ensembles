import React, { useState, useRef } from "react";
// import SpotifyPlaylist from "./spotifyPlayer";
import Radio from "./radio";
import Draggable from "react-draggable";


export default function Index() {
  const nodeRef = useRef(null);
  const [showRadio, setshowRadio] = useState(false)
  return (
    <div>
      <div onClick={() => setshowRadio(true)}>Radio</div>
      <div>Chat</div>
      {/* <SpotifyPlaylist /> */}
      {showRadio && 
      // <Draggable nodeRef={nodeRef}>
        <Radio closeRadio={() => setshowRadio(false)} id="radio" />
      // </Draggable>
      }
    </div>
  );
}

// import Draggable from "react-draggable";

// function App() {
//   return (
//  <Draggable>
//       <div>I can now be moved around!</div>
//     </Draggable>
//   );
// }

// export default App;