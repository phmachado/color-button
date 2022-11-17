import React, { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const buttonColor = toggleColor ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: toggleDisabled ? "gray" : buttonColor }}
        onClick={() => setToggleColor(!toggleColor)}
        disabled={toggleDisabled}
      >
        Change to {toggleColor ? "MediumVioletRed" : "MidnightBlue"}
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
