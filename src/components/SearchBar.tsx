import React, { ChangeEvent, KeyboardEvent } from "react";

interface SearchBarProps {
  searchTerm: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onInputChange,
  onSearch,
}) => {
  // Handle key press events (e.g., Enter key)
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      {/* Input for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        onKeyDown={handleKeyPress}
        className="w-64 py-2 px-4 mb-4 text-center bg-gray-800 text-white placeholder-gray-500 border border-green-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Search for Tracks on Spotify"
        spellCheck={false}
      />
      {/* Button to initiate search */}
      <button
        className="py-2 px-4 bg-green-500 rounded-3xl hover:bg-green-600 text-white font-bold"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
