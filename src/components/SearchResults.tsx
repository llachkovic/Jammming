import React from "react";
import SearchTrack from "./SearchTrack";
import { Track } from "../utils/types";

interface SearchResultsProps {
  results: Track[];
  onSelection: (track: Track) => void;
  currentlyPlaying: string;
  onTrackPlay: (previewUrl: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onSelection,
  currentlyPlaying,
  onTrackPlay,
}) => {
  return (
    <div className="border-2 border-green-500 rounded-3xl h-[532px]">
      <div className="my-2 mx-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-300 py-1 px-4 my-4 text-center h-12">
          Search Results
        </h2>
        {/* List of search results */}
        <ul className="max-h-[440px] overflow-y-auto">
          {results.map((result, index) => (
            <li
              key={result.id}
              className={`my-2 mx-4 ${
                index % 2 === 0 ? "bg-gray-700" : ""
              } border border-green-500 rounded-xl`}
            >
              {/* Individual search track */}
              <SearchTrack
                track={result}
                onSelection={onSelection}
                isPlaying={result.previewUrl === currentlyPlaying}
                onTrackPlay={onTrackPlay}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
