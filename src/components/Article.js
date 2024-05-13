import React from "react";

const Article = ({ title, date, image, abstract, index }) => {
  return (
    <div className="media-box">
      <div className="media-1">
        <p className="media-title">
          {`${index} `}
          {title}
        </p>
        <p className="date">{date}</p>
      </div>
      <div className="media-2">
        <img src={image} alt="media pic"></img>
        <p>{abstract}</p>
      </div>
    </div>
  );
};

export default Article;
