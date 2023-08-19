import React from "react";
import { useState } from "react";

function FormInput(props) {
  const [input, setInput] = useState("");
  
  const getInput = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.sendSearchParam(input);
    // setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} action="" className="form">
        <span className="search-icon material-symbols-outlined">search</span>
        <input
          value={input}
          onChange={getInput}
          className="input"
          placeholder="search for a country..."
          type="text"
        />
      </form>
    </div>
  );
}

export default FormInput;
