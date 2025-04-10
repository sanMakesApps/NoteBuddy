import { useState } from "react";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Report from "./components/Report/Report";
import Transcript from "./components/Transcript/Transcript";

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [isReporting, setIsReporting] = useState(false);

  return (
    <div
      id="homeContainer"
      className="fixed inset-0 flex flex-col justify-center bg-gray-200"
    >
      <div id="canvas" className="flex-1 flex items-center justify-center">
        {isRecording ? (
          <div
            id="record"
            className={`flex ${
              isReporting ? "gap-4" : ""
            } w-full max-w-[1200px] items-center justify-center`}
          >
            {/* Transcript will be centered when alone, take half width when with Report */}
            <div
              id="transcript"
              className={`${
                isReporting ? "flex-1" : "w-full max-w-[800px] text-center"
              }`}
            >
              <Transcript />
            </div>

            {/* Report will animate in/out and take half width when present */}
            {isReporting && (
              <div id="report" className="flex-1">
                <Report />
              </div>
            )}
          </div>
        ) : (
          <label className="text-gray-500">
            Start recording to transcribe notes and create reports.
          </label>
        )}
      </div>
      {/* <button
        onClick={() => {
          setIsReporting(!isReporting);
        }}
      >
        REPORT
      </button>
      <button
        onClick={() => {
          setIsRecording(!isRecording);
        }}
      >
        RECORD
      </button> */}
      <ControlPanel
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        isReporting={isReporting}
        setIsReporting={setIsReporting}
      />
    </div>
  );
}

export default App;
