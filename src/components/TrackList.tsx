import React from "react";
import PlaylistTrack from "./PlaylistTrack";
import { Track } from "../utils/types";

interface TrackListProps {
  selected: Track[];
  onDeselection: (track: Track) => void;
  currentlyPlaying: string;
  onTrackPlay: (previewUrl: string) => void;
}

const TrackList: React.FC<TrackListProps> = ({
  selected,
  onDeselection,
  currentlyPlaying,
  onTrackPlay,
}) => {
  return (
    <ul>
      {selected.map((item, index) => (
        <li
          key={item.id}
          className={`my-2 mx-4 ${
            index % 2 === 0 ? "bg-gray-700" : ""
          } border border-green-500 rounded-xl`}
        >
          {/* Render individual playlist track */}
          <PlaylistTrack
            track={item}
            onDeselection={onDeselection}
            isPlaying={item.previewUrl === currentlyPlaying}
            onTrackPlay={onTrackPlay}
          />
        </li>
      ))}
    </ul>
  );
};

export default TrackList;
