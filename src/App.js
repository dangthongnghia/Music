import React, { useState } from "react";
import SongList from "./components/SongList";
import MusicPlayer from "./components/MusicPlayer";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [songs] = useState([
    { id: 1, name: "Song 1", artist: "Artist 1", image: "image1.jpg" },
    { id: 2, name: "Song 2", artist: "Artist 2", image: "image2.jpg" },
    // Add more songs as needed
  ]);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleSelectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[prevIndex]);
  };

  const handleRepeat = () => {
    setCurrentTime(0);
  };

  const handleSeek = (time) => {
    setCurrentTime(time);
  };

  return (
    <div>
      <SongList songs={songs} onSelectSong={handleSelectSong} />
      <MusicPlayer
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
        onRepeat={handleRepeat}
      />
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
    </div>
  );
};

export default App;
