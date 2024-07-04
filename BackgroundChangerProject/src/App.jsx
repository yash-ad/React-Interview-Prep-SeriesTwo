import { useState } from "react";

const App = () => {
  // We have set an initial value of "Black" in the useState hook.
  const [color, setColor] = useState("Black");

  return (
    <div
      className="w-full h-screen duration-200"
      // Injected the state variable in it using evaluated expression using {curly braces}
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap bg-white gap-3 px-3 py-2 rounded-3xl shadow-lg">
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            // Using onClick event handler, whenever the user clicks on a button or any element within the application, the onClick event calls a function, and the called function triggers an action.
            // Always remember onClick event handler always accepts a function or function reference; we can't directly call the function in it.
            onClick={() => setColor("Red")}
            style={{ backgroundColor: "Red" }}
          >
            Red
          </button>
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            onClick={() => setColor("Green")}
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            onClick={() => setColor("Blue")}
            style={{ backgroundColor: "Blue" }}
          >
            Blue
          </button>
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            onClick={() => setColor("Olive")}
            style={{ backgroundColor: "Olive" }}
          >
            Olive
          </button>
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            onClick={() => setColor("Yellow")}
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            className="rounded-full px-4 py-1 outline-none text-white"
            onClick={() => setColor("Orange")}
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
