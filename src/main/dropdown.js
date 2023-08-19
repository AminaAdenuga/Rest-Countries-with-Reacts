import React from "react";


function Dropdown({ onSelect }) {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };
  return (
    <select onChange={selectHandler} className="dropdown">
      <option> Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
export default Dropdown;
