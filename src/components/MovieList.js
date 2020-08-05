import React from "react";
import MovieListCard from "./MovieListCard";

const MovieList = (props) => {
    return (
    <div className="container">
        <div className="row">
            <div className="col s12">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <MovieListCard key={i} image={movie.poster_path} />
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
};

export default MovieList;
