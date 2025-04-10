import React, { useRef } from "react";

import PlayIcon from "../icons/Play";
import MicIcon from "../icons/Mic";
import SaveIcon from "../icons/SaveIcon";
import Setting from "../icons/Setting";
import GenerateRecordIcon from "../icons/GenerateRecordIcon";
import Stop from "../icons/Stop";

import ToolTip from "../ToolTip/ToolTip";
import { startStreaming, stopStreaming } from "../../services/audioService";
import { generateReport } from "../../services/reportService";

const ControlPanel = ({
  isRecording,
  setIsRecording,
  isReporting,
  setIsReporting,
  onTranscriptUpdate,
  setReport,
  transcript,
}) => {
  const wsRef = useRef(null);

  const handleStreaming = async () => {
    if (isRecording) {
      wsRef.current = await startStreaming(onTranscriptUpdate);
    } else {
      stopStreaming(wsRef.current);
    }
    setIsRecording(!isRecording);
  };

  const handleGenerateReport = async () => {
    setIsReporting(!isReporting);
    const reportData = await generateReport(transcript);
    setReport(reportData.report);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center space-x-2">
        <div className="flex space-x-2">
          <ToolTip noteText="Start/Stop Recording" position="top">
            <button
              onClick={handleStreaming}
              className="p-2 bg-rose-500 hover:bg-rose-700 rounded transition-colors"
            >
              {isRecording ? (
                <Stop className="w-5 h-5 fill-white" />
              ) : (
                <MicIcon className="w-5 h-5 fill-white" />
              )}
            </button>
          </ToolTip>

          <ToolTip noteText="Play recorded audio" position="top">
            <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors">
              <PlayIcon className="w-5 h-5 fill-white" />
            </button>
          </ToolTip>
        </div>

        <div className="text-xs text-gray-500">
          {isRecording && !isReporting && "Transcribing..."}
          {!isRecording && !isReporting && "Ready To Transcribe"}
          {isRecording && isReporting && "Generating Report.."}
        </div>

        <div className="flex space-x-2">
          <ToolTip noteText="Generate transcript from recording" position="top">
            <button
              onClick={handleGenerateReport}
              className="p-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
            >
              <GenerateRecordIcon className="w-5 h-5 fill-white" />
            </button>
          </ToolTip>

          <ToolTip noteText="Save current recording" position="top">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <SaveIcon  className="w-5 h-5" />
            </button>
          </ToolTip>

          <ToolTip noteText="Open settings" position="top">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
              <Setting className="w-5 h-5" />
            </button>
          </ToolTip>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
