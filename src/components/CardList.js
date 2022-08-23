import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  console.log(results.data)
  if (results.data) {
    data = results.data.webPages.value || [];
  }
  console.log(data);
  return (
    <div className="results-div">
      <ol className="results">
      {data.map((item) => (
        <Card key={item.id} result={item} />
      ))}
      </ol>
    </div>
  );
}

export default CardList;