import React from "react";

const SubHeader = ({ noteCount }) => {
  return (
    <div className="notes-header">
      <h2 className="notes-title">&#9782; List</h2>
      <p className="notes-count">{noteCount}</p>
    </div>
  );
};

export default SubHeader;
