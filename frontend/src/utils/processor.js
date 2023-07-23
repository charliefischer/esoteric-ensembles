class WorkletProcessor extends window.AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    // Do something with the data, e.g. convert it to WAV
    console.log(inputs);
    return true;
  }
}

registerProcessor("worklet-processor", WorkletProcessor);