import React from "react";

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  return (
    <div>
      <input
        type="range"
        value={currentTime}
        max={duration}
        onChange={(e) => onSeek(e.target.value)}
      />
      <div>
        {currentTime} / {duration}
      </div>
    </div>
  );
};

export default ProgressBar;
