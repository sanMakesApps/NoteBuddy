const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store transcribed text
let transcribedText = '';

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {

    
    // Simulate transcription (replace this with a real transcription service)
    const mockTranscription = `Transcribed: ${message.length} bytes received\n`;
    transcribedText += mockTranscription;

    // Send the transcribed text back to the client
    ws.send(mockTranscription);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Endpoint to save the transcript
app.post('/save_transcript', (req, res) => {
  const filePath = path.join(__dirname, 'transcript.txt');

  fs.writeFile(filePath, transcribedText, (err) => {
    if (err) {
      console.error('Error saving transcript:', err);
      return res.status(500).json({ error: 'Failed to save transcript' });
    }

    res.json({ message: 'Transcript saved successfully' });
  });
});

// Serve static files (for React app)
const noteBuddyBuildPath = path.join(__dirname, '../NoteBuddy/');
app.use(express.static(noteBuddyBuildPath));

// Handle React routing (serve index.html for all routes)
app.get('*', (req, res) => {
  res.sendFile(path.join(noteBuddyBuildPath, 'index.html'));
});

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});