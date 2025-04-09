// ICONS
import GenerateRecordIcon from "./components/icons/GenerateRecordIcon";
import MicIcon from "./components/icons/Mic";
import PlayIcon from "./components/icons/Play";
import Setting from "./components/icons/Setting";

function App() {
  return (
    <div className="fixed inset-0 flex flex-col justify-end pointer-events-none bg-gray-200">
      <div className="flex-1 flex items-center justify-center">
        {/* TRANSCRIBE & RECORDS - Row Layout */}
        <div className="flex gap-8">
          {/* Adjust gap as needed */}
          {/* TRANSCRIBE */}
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            TRANSCRIBE TEXT
          </div>
          {/* RECORDS */}
          <div className="bg-white p-6 rounded-lg shadow-md min-w-[300px]">
            RECORDS
          </div>
        </div>
      </div>

      {/* CONSOLE */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <div className="flex justify-between items-center space-x-2">
          {/* Left side buttons */}
          <div className="flex space-x-2">
            {/* IMPLEMENTATION IDEA: I CAN EITHER DISABLE PLAY BUTTON UNTIL SOMETHING IS RECORDED OR I CAN USE STATE TO TOGGLE BETWEEN RECORDING AND PLAYING */}
            <button className="px-3 py-1.5 bg-rose-500 hover:bg-gray-200 rounded text-sm font-medium transition-colors">
              <MicIcon className="fill-white" />
            </button>
            <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 rounded text-sm font-medium transition-colors">
              <PlayIcon className="fill-white" />
            </button>
          </div>

          {/* Center status/info */}
          <div className="text-xs text-gray-500">Ready To Transcribe</div>

          {/* Right side buttons */}
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition-colors">
              <GenerateRecordIcon />
            </button>
            <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium transition-colors">
              <Setting />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
