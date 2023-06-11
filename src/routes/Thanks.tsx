import React from "react";
import { Link } from "react-router-dom";

const Thanks: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-gray-300 text-lg text-center">
        Thank you for using Jammming!
      </h2>

      {/* Success Message */}
      <p className="text-gray-300 text-lg text-center mb-8">
        Your new playlist has been successfully saved and uploaded to your
        Spotify account. Happy listening!
      </p>

      {/* Create Another Link */}
      <p className="text-gray-300 text-lg text-center">
        Want to create another? Click below:
      </p>
      <Link
        to="/app"
        className="text-green-500 hover:text-green-600 hover:underline font-bold mt-4 text-xl"
      >
        Create another playlist
      </Link>
    </div>
  );
};

export default Thanks;
