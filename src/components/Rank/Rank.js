import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <div className="white f3">{`${name}, your current entry count is ... `}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
