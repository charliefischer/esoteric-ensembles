import React, { useEffect, useRef } from "react";

const AudioAnalyzer = () => {
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

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
    };
    getUserMedia();

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
        analyserNode.getFloatFrequencyData(pitchDataArray)
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
        // Do something with the volume level, e.g., update UI, trigger actions, etc.
        node.style.fontSize = `${volumeLevel}px`;

        
        // console.log(frequency)

        // Request next animation frame for continuous analysis
        requestAnimationFrame(analyzeVolumeLevels);
      };

      // Start analyzing volume levels
      requestAnimationFrame(analyzeVolumeLevels);

      // Save references to audio context and analyser node
      audioContextRef.current = audioContext;
      analyserRef.current = analyserNode;
    };
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
      <h1 className="test" style={{transition: "all 0.2s"}}>React</h1>
    </div>

  );
};

export default AudioAnalyzer;
