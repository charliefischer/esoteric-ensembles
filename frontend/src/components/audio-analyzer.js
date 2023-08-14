import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

let analyserNode;
let dataArray;
let pitchDataArray;
let volumeLevel;
let wordIndex = 0;

const AudioAnalyzer = () => {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const updateAlternateClasses = () => {
    const node = document.querySelector(".app-wrapper");
    if (node && !node.classList.contains("alt")) {
      node.classList.add("alt");
    }
  };

  const removeAlternateClasses = () => {
    const node = document.querySelector(".app-wrapper");
    if (node && node.classList.contains("alt")) {
      node.classList.remove("alt");
    }
  };
  let colorValue;
  let hslColor;
  const [wordStyles, setWordStyles] = useState([]);


  useEffect(() => {
    // Access Microphone Input
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        handleSuccess(stream);
      } catch (error) {
        // Handle error
        console.error("Error accessing microphone:", error);
      }
      // add class to root to allow for alternate styling
      updateAlternateClasses();
    };
    getUserMedia();

    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });

    // Set Up Audio Context
    const handleSuccess = (stream) => {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);

      // Create Audio Nodes
      // if(!analyserNode) return;
      analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 256;

      analyserNode.smoothingTimeConstant = 0.8;

      // Connect Nodes
      source.connect(analyserNode);
      analyserNode.connect(audioContext.destination);

      // Analyze Volume Levels
      const bufferLength = analyserNode.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);
      pitchDataArray = new Float32Array(bufferLength);

      requestAnimationFrame(
        analyzeVolumeLevels(analyserNode, pitchDataArray, dataArray)
      );

      // Save references to audio context and analyser node
      audioContextRef.current = audioContext;
      analyserRef.current = analyserNode;
    };

    return () => {
      removeAlternateClasses();
    };
  }, []);

  const analyzeVolumeLevels = (analyserNode, pitchDataArray, dataArray) => {
    analyserNode.getFloatFrequencyData(pitchDataArray);
    const averagePitchLevel = calculateAverage(pitchDataArray);

    analyserNode.getByteTimeDomainData(dataArray);
    volumeLevel = Math.max(...dataArray) / 255.0;;
    console.log("volume being set", volumeLevel);

    // Do something with the pitch level, e.g., update UI, trigger actions, etc.
    colorValue = scaleValue(averagePitchLevel, -100, 0, 0, 360);
    hslColor = `hsl(${colorValue}, 100%, 50%)`;


    const newWordStyles = transcript.split(" ").map((word, index) => ({
      word: word,
      color: findVal(index, "color"),
      fontSize: findVal(index, "fontSize")
    }));
    setWordStyles(newWordStyles);

    wordIndex++; // Increment word index

    if (wordIndex < transcript.split(" ").length) {
      requestAnimationFrame(() => analyzeVolumeLevels(analyserNode, pitchDataArray, dataArray));
    }
  };

  const findVal = (i, v) => {
    console.log(i, "was summoned", hslColor, volumeLevel)
    if(i === wordIndex) {
      return v === "color" ? hslColor : `${scaleValue(volumeLevel, 0, 1, 12, 36)}px`
    }
    if(wordStyles[i] && wordStyles[i][v]){
      return wordStyles[i][v]
    } else {
      return undefined
    }
  }

  useEffect(() => {
    if (transcript && transcript.length > 0) {
      wordIndex = 0;
      analyzeVolumeLevels(analyserNode, pitchDataArray, dataArray);
    }
  }, [transcript]);

  const calculateAverage = (array) => {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
  };

  const scaleValue = (value, minSrc, maxSrc, minDst, maxDst) => {
    return ((value - minSrc) / (maxSrc - minSrc)) * (maxDst - minDst) + minDst;
  };

  return (
    <div>
      <div>{listening ? "yes" : "no"}</div>
      <button onClick={SpeechRecognition.stopListening}>stop</button>
      <button onClick={resetTranscript}>reset</button>
      {(!browserSupportsSpeechRecognition || !isMicrophoneAvailable) && (
        <p>browser support not met</p>
      )}
      <h1 className="test" style={{ transition: "all 0.2s" }}>
        {transcript.length > 0 && (
          <span className="transcript-word">
            {transcript.split(" ").map((word, index) => (
              <span
                key={index}
                style={{
                  color: wordStyles[index]
                    ? wordStyles[index].color
                    : undefined,
                  fontSize: wordStyles[index]
                    ? wordStyles[index].fontSize
                    : undefined,
                }}
              >
                {word}{" "}
              </span>
            ))}
          </span>
        )}
        {!transcript.length && <span>Start Talking...</span>}
      </h1>
    </div>
  );
};

export default AudioAnalyzer;