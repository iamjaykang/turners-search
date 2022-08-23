import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header/Header";

import BingSource from "./api/BingSource";
import "./stylesheet/main.css";

function App() {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await BingSource.get(
      `/search?q=${text}&customconfig=1b31e08f-44ab-4b1f-9abb-e21ec22a636e&mkt=en-NZ`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.REACT_APP_SUBSCRIPTION_KEY,
        },
      }
    );

    console.log(results);

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="container searchApp">
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;
