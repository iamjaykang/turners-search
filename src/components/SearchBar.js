import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Searchbar(props) {
  const { 
    onSearch 
  } = props;

  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(searchText)
    }
  }

  const handleClick = () => {
    onSearch(searchText)
  };

  return (
    <div>
      <div className="searchbox"> 
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Enter search term"
        ></input>
        <FontAwesomeIcon type="button" icon={faMagnifyingGlass} className="searchbox-submit" onClick={handleClick}/>
      </div>
    </div>
  );
}

export default Searchbar;
