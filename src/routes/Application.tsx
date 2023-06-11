import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Playlist from "../components/Playlist";
import Spotify from "../utils/Spotify";
import { Track } from "../utils/types";

function Application() {
  // State variables
  const [isInitialized, setIsInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Track[]>([]);
  const [playlistName, setPlaylistName] = useState("");
  const [selected, setSelected] = useState<Track[]>([]);
  const [currentlyPlayingUrl, setCurrentlyPlayingUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Clearing the access token on reload
    Spotify.authenticate();
  }, []);

  const handleSearch = async () => {
    try {
      const results = await Spotify.search(searchTerm);
      setSearchResults(results);
      setSearchTerm("");
      setIsInitialized(true);
      setCurrentlyPlayingUrl("");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(event.target.value);
  };

  const handleSelection = (track: Track) => {
    if (!selected.includes(track)) {
      setSelected([...selected, track]);
    }
  };

  const handleDeselection = (trackToRemove: Track) => {
    if (selected.includes(trackToRemove)) {
      setSelected(selected.filter((track) => track.id !== trackToRemove.id));
    }
  };

  const handleSave = () => {
    const trackUris = selected.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris)
      .then(() => {
        navigate("/thanks");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleTrackPlay = (trackUrl: string) => {
    if (trackUrl === currentlyPlayingUrl) {
      setCurrentlyPlayingUrl("");
    } else {
      setCurrentlyPlayingUrl(trackUrl);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-full">
      {/* Search Bar */}
      <SearchBar
        searchTerm={searchTerm}
        onInputChange={handleSearchChange}
        onSearch={handleSearch}
      />

      {/* Conditional Rendering based on isInitialized */}
      {isInitialized ? (
        // Search Results
        searchResults.length !== 0 ? (
          <div className="flex flex-col md:flex-row gap-10 w-screen justify-center max-w-full">
            {/* Search Results */}
            <div className="w-2/5">
              <SearchResults
                results={searchResults}
                onSelection={handleSelection}
                currentlyPlaying={currentlyPlayingUrl}
                onTrackPlay={handleTrackPlay}
              />
            </div>

            {/* Playlist */}
            <div className="w-2/5">
              <Playlist
                onInputChange={handleNameChange}
                name={playlistName}
                selected={selected}
                onDeselection={handleDeselection}
                currentlyPlaying={currentlyPlayingUrl}
                onTrackPlay={handleTrackPlay}
                onSave={handleSave}
              />
            </div>

            {/* Audio Player */}
            <audio src={currentlyPlayingUrl} autoPlay />
          </div>
        ) : (
          // No Results Found
          <p className="text-gray-300 text-lg text-center">No results found.</p>
        )
      ) : (
        // Welcome Message
        <p className="text-gray-300 text-lg text-center">
          Welcome to Jammming! Start searching for tracks on Spotify.
        </p>
      )}
    </div>
  );
}

export default Application;
