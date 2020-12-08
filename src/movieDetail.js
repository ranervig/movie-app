import React from 'react';

const MovieDetail = ({movie}) =>{
    return(
        <div style={{backgroundColor: "maroon", width: "30vw", maxheight: "100vh"}}>
            <img alt={movie.title} src={movie.posterUrl} width={"80%"}/>
            <h1>{movie.title}</h1>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.rating}/10</p>
            <p>Released: {movie.releaseYear}</p>
            <p>{movie.description}</p>
            <p>Categories: {movie.categories.join(', ')}</p>
        </div>
    )
}

export {MovieDetail};