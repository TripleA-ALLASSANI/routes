import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = (props) => {
    return (
    <div className="tc bg-black ma0 pa4 min-vh-100">
        {props.movies.map((movie, index) => (
        <MovieCard 
        description={movie.description}
        key={index} 
        posterURL={movie.posterURL}
        rating={movie.rating}
        title={movie.title} 
        />
    ))}
    </div>
    );
};

export default MovieList;
