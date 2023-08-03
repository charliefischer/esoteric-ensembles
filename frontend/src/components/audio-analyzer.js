import React, { useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const AudioAnalyzer = () => {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  const updateAlternateClasses = () => {
    const node = document.querySelector(".app-wrapper")
    if(node && !node.classList.contains("alt")){
      node.classList.add("alt")
    }
  }

  const removeAlternateClasses = () => {
    const node = document.querySelector(".app-wrapper")
    if(node && node.classList.contains("alt")){
      node.classList.remove("alt")
    }
  }

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
      language: 'en-GB',
    })

    // Set Up Audio Context
    const handleSuccess = (stream) => {
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.createMediaStreamSource(stream);

      // Create Audio Nodes
      const analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 256;

      analyserNode.smoothingTimeConstant = 0.8;

      // Connect Nodes
      source.connect(analyserNode);
      analyserNode.connect(audioContext.destination);

      // Analyze Volume Levels
      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const pitchDataArray = new Float32Array(bufferLength);

      const node = document.querySelector(".test");

      const analyzeVolumeLevels = () => {
        analyserNode.getFloatFrequencyData(pitchDataArray);
        const averagePitchLevel = calculateAverage(pitchDataArray);

        // React to Frequency/Pitch Levels
        // Do something with the pitch level, e.g., update UI, trigger actions, etc.
        const colorValue = scaleValue(averagePitchLevel, -100, 0, 0, 360);
        const hslColor = `hsl(${colorValue}, 100%, 50%)`;
        node.style.color = hslColor;

        analyserNode.getByteTimeDomainData(dataArray);

        // Calculate volume level
        const volumeLevel = Math.max(...dataArray);

        // React to Volume Levels
        node.style.fontSize = `${volumeLevel}px`;

        requestAnimationFrame(analyzeVolumeLevels);
      };

      requestAnimationFrame(analyzeVolumeLevels);

      // Save references to audio context and analyser node
      audioContextRef.current = audioContext;
      analyserRef.current = analyserNode;
    };

    return () => {
      removeAlternateClasses();
    }
  }, []);

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
      <h1 className="test" style={{ transition: "all 0.2s" }}>
        {transcript.length > 0 && 
          <span>{transcript}</span>
        }
        {!transcript.length &&
          <span>Start Talking...</span>
        }
      </h1>
      <button onClick={SpeechRecognition.stopListening}>
        stop
      </button>
      <button onClick={resetTranscript}>
        reset
      </button>
      {(!browserSupportsSpeechRecognition || !isMicrophoneAvailable) &&
          <p>browser support not met</p>
      }
    </div>
  );
};

export default AudioAnalyzer;
