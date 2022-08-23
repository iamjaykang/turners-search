import React from "react";

export default function Card(props) {
  const { result } = props;
  return (
    <li className="resultCard">
      <h2>
        <a target="_blank" href={result.url}>
          {result.name}
        </a>
      </h2>
      <div className="bcs-caption">
        <div className="caption-image">
          <img src={result.openGraphImage.contentUrl} alt={result.Title} />
        </div>
        <div className="caption-text">
          <cite>{result.displayUrl}</cite>
          <p>{result.snippet}</p>
        </div>
      </div>
    </li>
  );
}
