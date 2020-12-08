import React from "react";

const MoviePreview = ({ movie, onClickFunction }) => {
  return (
      <img alt={movie.title} src={movie.posterUrl} width={"100%"} onClick={onClickFunction}/>
  );
};

export { MoviePreview };
