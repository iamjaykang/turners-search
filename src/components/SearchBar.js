import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import replacePunctuation from '../stringFilter.ts'

function Searchbar({ onSearch }) {
  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      const filteredSearchText = replacePunctuation(searchText)
      onSearch(filteredSearchText)
    }
  }

  const handleClick = () => {
    const filteredSearchText = replacePunctuation(searchText)
    onSearch(filteredSearchText)
  }

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
