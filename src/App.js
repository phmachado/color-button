import React, { useState } from "react";

function App() {
  const [toggleColor, setToggleColor] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: toggleColor ? "blue" : "red" }}
        onClick={() => setToggleColor(!toggleColor)}
      >
        Change to {toggleColor ? "red" : "blue"}
      </button>
    </div>
  );
}

export default App;
