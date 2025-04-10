import React from "react";

const Report = ({report}) => {
  return (
    <div className="bg-white h-100   p-6 rounded-lg shadow-md">
      <h4 className="text-center text-gray-500 mb-4">RECORD</h4>
      <div className="max-h-80 overflow-y-auto">
        <textarea value={report} readOnly rows={50} cols={60} />
      </div>
    </div>
  );
};

export default Report;
