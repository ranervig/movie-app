import React from "react";
import { movies } from "./movies";
import { MovieDetail } from "./movieDetail";
import { MoviePreview } from "./moviePreview";
import "./App.css";

function App() {
  const [currentMovie, setMovie] = React.useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div style={{ overflow: "auto", height: "100vh", width: "10vw"}}>
        <h2>Movie List</h2>
        {movies.map((movie) => {
          return (
            <MoviePreview
              movie={movie}
              onClickFunction={() => setMovie(movie)}
              key={movie.title}
            ></MoviePreview>
          );
        })}
      </div>
      <div style={{maxHeight: "100vh"}}>
        <h1>Movie Information</h1>
        {currentMovie ? (
          <MovieDetail movie={currentMovie} />
        ) : (
          <>
            <h2>Please Select A Movie</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
