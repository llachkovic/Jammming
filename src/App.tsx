import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Thanks from "./routes/Thanks";
import Application from "./routes/Application";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center">
      <h1 className="text-grey-200 text-4xl font-bold mt-8 mb-16">
        Ja<span className="text-green-500">mmm</span>ing
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Application />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>

      <footer className="mt-16 text-gray-400 mb-8">
        Proudly made by Lukas (2023)
      </footer>
    </div>
  );
};

export default App;
