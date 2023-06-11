import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Welcome Message */}
      <p className="text-gray-300 text-lg text-center">
        Welcome to the Jammming web application for creating Spotify playlists.
        <br />
        Please click below to log in and start using Jammming. <br />
        Enjoy!
      </p>

      {/* Log in Link */}
      <Link
        to="/app"
        className="text-green-500 hover:text-green-600 hover:underline font-bold mt-4 text-xl"
      >
        Log in with Spotify
      </Link>
    </div>
  );
};

export default Home;
