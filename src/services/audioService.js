export const startStreaming = async (onTranscriptUpdate) => {
    const ws = new WebSocket('ws://localhost:8000/ws');
    let audioContext, source, processor, stream;

    ws.onmessage = (event) => {
        onTranscriptUpdate(event.data);
    };

    try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new AudioContext();
        source = audioContext.createMediaStreamSource(stream);
        processor = audioContext.createScriptProcessor(4096, 1, 1);

        const resampleRatio = 16000 / audioContext.sampleRate;

        source.connect(processor);
        processor.connect(audioContext.destination);

        processor.onaudioprocess = (e) => {
            const inputData = e.inputBuffer.getChannelData(0);
            const resampledLength = Math.floor(inputData.length * resampleRatio);
            const resampledData = new Float32Array(resampledLength);

            for (let i = 0; i < resampledLength; i++) {
                const idx = i / resampleRatio;
                const idx1 = Math.floor(idx);
                const idx2 = Math.min(idx1 + 1, inputData.length - 1);
                const frac = idx - idx1;

                resampledData[i] = inputData[idx1] * (1 - frac) + inputData[idx2] * frac;
            }

            if (ws.readyState === WebSocket.OPEN) {
                ws.send(resampledData.buffer);
            }
        };
    } catch (error) {
        console.error('Error starting audio stream:', error);
    }

    return ws;
};

export const stopStreaming = (ws) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.close();
    }
};