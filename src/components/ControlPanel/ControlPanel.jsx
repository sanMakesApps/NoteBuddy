import React from "react";
import PlayIcon from "../icons/Play";
import MicIcon from "../icons/Mic";
import SaveIcon from "../icons/SaveIcon";
import Setting from "../icons/Setting";
import GenerateRecordIcon from "../icons/GenerateRecordIcon";

const ControlPanel = ({
  isRecording,
  setIsRecording,
  isReporting,
  setIsReporting,
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center space-x-2">
        {/* Left side buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => {
              // console.log("Clicked");
              setIsRecording(!isRecording);
            }}
            className="p-2 bg-rose-500 hover:bg-rose-700 rounded transition-colors"
          >
            <MicIcon className="w-5 h-5 fill-white" />
          </button>

          <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors">
            <PlayIcon className="w-5 h-5 fill-white" />
          </button>
        </div>

        {/* Center status/info */}
        <div className="text-xs text-gray-500">Ready To Transcribe</div>

        {/* Right side buttons */}
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setIsReporting(!isReporting);
            }}
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors"
          >
            <GenerateRecordIcon className="w-5 h-5 fill-white" />
          </button>

          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
            <SaveIcon className="w-5 h-5" />
          </button>

          <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors">
            <Setting className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
