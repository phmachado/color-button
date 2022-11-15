import React, { useState } from "react";

function App() {
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: toggleColor ? "blue" : "red" }}
        onClick={() => setToggleColor(!toggleColor)}
        disabled={toggleDisabled}
      >
        Change to {toggleColor ? "red" : "blue"}
      </button>
      <input
        type="checkbox"
        onClick={() => setToggleDisabled(!toggleDisabled)}
      />
    </div>
  );
}

export default App;
