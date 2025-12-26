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
      <button className="px-6 py-2 m-4 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Click me
      </button>
      <button className="px-6 py-2 m-4 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-500 ease-in-out transform hover:scale-110">
        Hover me
      </button>
      <div className="max-w-sm rounded-lg shadow-lg bg-indigo-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Tailwind Card</h2>
        <p className="text-gray-700">
          This is a simple card built with tailwind CSS
        </p>
        <button className="px-6 py-2 m-4 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Read More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        <div className="bg-blue-300 p-4">1</div>
        <div className="bg-blue-300 p-4">2</div>
        <div className="bg-blue-300 p-4">3</div>
        <div className="bg-blue-300 p-4">4</div>
      </div>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl m-4">
        I scale on different screens!
      </p>
      <p className="text-red-600 sm:text-blue-600 md:text-emerald-600 lg:text-yellow-500 xl:text-purple-600 m-4">
        Resize the screen to see changes!
      </p>
      <div className="bg-[#ff5733] h-[165px] w-[300px] border border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Custom Width, Height and Color
      </div>
      <div className="bg-mint-500 text-mint-500 h-[165px] w-[300px] border border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Theme variables
      </div>
      <div className="bg-primary font-display h-[165px] w-[300px] border border-green-600 p-4 rounded-lg m-4 flex items-center justify-center">
        Font family and Color variables
      </div>
    </>
  );
}

export default App;
