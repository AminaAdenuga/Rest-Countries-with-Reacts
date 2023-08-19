import sun from "./icons8-moon-50.png";
import moon from "./icons8-moon-50 (1).png";
import { useState } from "react";
import React from "react";
function DarkTheme() {
  const [lightMode, setLightMode] = useState(true);
  const handleChangeDarkTheme = (e) => {
    if (e.target.src === sun) {
      setDarkMode();
    } else {
      setLighMode();
    }
    setLightMode((prevMode) => !prevMode);
  };

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLighMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  return (
    <div>
      <div className="header-span">
        <div onClick={handleChangeDarkTheme}>
          <img alt="mode" width="20px" src={lightMode ? sun : moon} />
        </div>

        <p className="font-semibold">Dark Mode</p>
      </div>
    </div>
  );
}
export default DarkTheme;
