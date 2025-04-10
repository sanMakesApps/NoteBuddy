import React from "react";

const Report = (props) => {
  return (
    <div className="bg-white h-100   p-6 rounded-lg shadow-md">
      <h4 className="text-center text-gray-500 mb-4">RECORD</h4>
      <div className="max-h-80 overflow-y-auto">
        <ul>
          <li>LIST ITEM 1</li>
          <li>LIST ITEM 2</li>
          <li>LIST ITEM 3</li>
          <li>LIST ITEM 4</li>
          <li>LIST ITEM 5</li>
          <li>LIST ITEM 6</li>
        </ul>
      </div>
    </div>
  );
};

export default Report;
