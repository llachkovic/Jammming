import React, { ChangeEvent } from "react";
import TrackList from "./TrackList";
import { Track } from "../utils/types";

interface PlaylistProps {
  name: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selected: Track[];
  onDeselection: (track: Track) => void;
  currentlyPlaying: string;
  onTrackPlay: (previewUrl: string) => void;
  onSave: () => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  name,
  onInputChange,
  selected,
  onDeselection,
  currentlyPlaying,
  onTrackPlay,
  onSave,
}) => {
  return (
    <div className="h-[532px] border-2 border-green-500 rounded-3xl">
      <div className="mx-4 my-2">
        <div className="flex items-center justify-between">
          {/* Input for playlist name */}
          <input
            type="text"
            value={name}
            onChange={onInputChange}
            className="w-72 h-10 px-4 py-1 ml-4 text-center font-semibold placeholder-gray-500 bg-gray-800 border border-green-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400 text-green-500"
            placeholder="Playlist Name"
            spellCheck={false}
          />
          {/* Button to save to Spotify */}
          <button
            onClick={onSave}
            className="h-10 py-1 px-3 mr-4 my-4 font-bold text-white bg-green-500 rounded-3xl hover:bg-green-600"
          >
            Save to Spotify
          </button>
        </div>

        {/* Display selected tracks */}
        <div className="max-h-[440px] overflow-y-auto">
          {selected.length === 0 && (
            <div className="my-8 text-center">
              <p className="text-green-500">Added Tracks Will Show up Here!</p>
            </div>
          )}
          <TrackList
            selected={selected}
            onDeselection={onDeselection}
            currentlyPlaying={currentlyPlaying}
            onTrackPlay={onTrackPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Playlist;
