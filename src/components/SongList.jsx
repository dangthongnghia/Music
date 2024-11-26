import React from "react";

const SongList = ({ songs, onSelectSong }) => {
  return (
    <div>
      {songs.map((song) => (
        <div key={song.id} onClick={() => onSelectSong(song)}>
          <img src={song.image} alt={song.name} />
          <div>
            <h3>{song.name}</h3>
            <p>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
