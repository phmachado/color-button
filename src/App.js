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
        id="disable-button-checkbox"
        type="checkbox"
        onClick={() => setToggleDisabled(!toggleDisabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
