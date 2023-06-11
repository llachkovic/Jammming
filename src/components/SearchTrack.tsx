import React from "react";
import { Track } from "../utils/types";

interface SearchTrackProps {
  track: Track;
  onSelection: (track: Track) => void;
  isPlaying: boolean;
  onTrackPlay: (previewUrl: string) => void;
}

const SearchTrack: React.FC<SearchTrackProps> = ({
  track,
  onSelection,
  isPlaying,
  onTrackPlay,
}) => {
  // Handle track selection
  const handleSelection = () => {
    onSelection(track);
  };

  // Handle play button click
  const handlePlayClick = () => {
    onTrackPlay(track.previewUrl);
  };

  return (
    <div className="flex items-center justify-between py-2 px-4">
      <div>
        {/* Track name */}
        <p className="text-lg font-semibold text-gray-300 truncate w-64">
          {track.name}
        </p>
        {/* Track artist and album */}
        <p className="text-sm text-gray-400 truncate w-64">
          {track.artist} | {track.album}
        </p>
      </div>
      <div className="flex">
        {/* Play button */}
        <button
          className="py-1 px-2 bg-gray-800 text-gray-400 rounded-3xl border border-green-500 hover:ring-1 hover:ring-green-400 hover:text-gray-300"
          onClick={handlePlayClick}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
        {/* Add button */}
        <button
          className="py-1 px-2 bg-gray-800 text-green-500 rounded-3xl border border-green-500 hover:ring-1 hover:ring-green-400 hover:text-green-400 mx-2"
          onClick={handleSelection}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default SearchTrack;
