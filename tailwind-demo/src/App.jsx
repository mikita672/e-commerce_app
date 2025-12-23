import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <p className="text-lg underline font-bold mt-4 text-blue-600">
        Tailwind makes styling easy!
      </p>
      <div className="bg-gray-200 p-4 m-4">Background color demo</div>
      <div className="bg-green-300 border border-green-600 p-4 rounded-lg m-4">
        Border demo
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-blue-200 p-4 text-red-700">1</div>
        <div className="bg-blue-400 p-4">2</div>
        <div className="bg-blue-600 p-4 text-white">3</div>
      </div>
      <div className="flex justify-center items-center gap-4 bg-gray-300 mt-4 flex-col">
        <p className="text-xl font-bold">Text 1</p>
        <p className="text-xl font-bold">Text 2</p>
        <p className="text-xl font-bold">Text 3</p>
      </div>
    </>
  );
}

export default App;
