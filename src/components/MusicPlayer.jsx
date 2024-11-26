import React from "react";

const MusicPlayer = ({
  currentSong,
  isPlaying,
  onPlayPause,
  onNext,
  onPrev,
  onRepeat,
}) => {
  return (
    <div>
      <img src={currentSong.image} alt={currentSong.name} />
      <div>
        <h3>{currentSong.name}</h3>
        <p>{currentSong.artist}</p>
      </div>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={onNext}>Next</button>
      <button onClick={onRepeat}>Repeat</button>
    </div>
  );
};

export default MusicPlayer;
