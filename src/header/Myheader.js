import React from 'react'
import "./Myheader.css";
import DarkTheme from "./darkmode";

function Header() {
  return (
    <div className="App">
      <div className="header-div">
        <header className="header">
          <h1 className=" h1-text font-bold">Where in the world?</h1>
          <DarkTheme></DarkTheme>
        </header>
      </div>
    </div>
  );
}
export default Header;
