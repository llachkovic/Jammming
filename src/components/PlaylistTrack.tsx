import React from "react";
import { Track } from "../utils/types";

interface PlaylistTrackProps {
  track: Track;
  onDeselection: (track: Track) => void;
  isPlaying: boolean;
  onTrackPlay: (previewUrl: string) => void;
}

const PlaylistTrack: React.FC<PlaylistTrackProps> = ({
  track,
  onDeselection,
  isPlaying,
  onTrackPlay,
}) => {
  // Handler for deselection button click
  const handleDeselection = () => {
    onDeselection(track);
  };

  // Handler for play button click
  const handlePlayClick = () => {
    onTrackPlay(track.previewUrl);
  };

  return (
    <div className="flex items-center justify-between py-2 px-4">
      <div>
        {/* Track name */}
        <p className="w-64 truncate text-lg font-semibold text-green-500">
          {track.name}
        </p>
        {/* Artist and album */}
        <p className="w-64 truncate text-sm text-gray-400">
          {track.artist} | {track.album}
        </p>
      </div>
      <div className="flex">
        {/* Remove button */}
        <button
          className="py-1 px-2 mx-2 rounded-3xl bg-gray-800 text-green-500 border border-green-500 hover:text-green-400 hover:bg-gray-800 hover:ring-1 hover:ring-green-400"
          onClick={handleDeselection}
        >
          Remove
        </button>
        {/* Play/Stop button */}
        <button
          className="py-1 px-2 rounded-3xl bg-gray-800 text-gray-400 border border-green-500 hover:text-gray-300 hover:bg-gray-800 hover:ring-1 hover:ring-green-400"
          onClick={handlePlayClick}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default PlaylistTrack;
