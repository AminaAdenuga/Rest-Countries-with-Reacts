import React from "react";
import "./App.css";
import Header from "./header/Myheader";
import Main from "./main/Mymain";
import Footer from "./footer/footer";

function App() {
  return (
    <div className="Apps">
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
