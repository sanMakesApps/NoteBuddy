import React from "react";

const Transcript = ({ transcript }) => {
  return (
    <div className="bg-white h-100   p-6 rounded-lg shadow-md">
      <h4 className="text-center text-gray-500 mb-4">TRANSCRIBE TEXT</h4>
      <div className="max-h-80 overflow-y-auto text-left">
        <p className="mb-3">{transcript}</p>
      </div>
    </div>
  );
};

export default Transcript;
