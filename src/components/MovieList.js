import React from 'react'
import MovieCard from './MovieCard'
export default function MovieList({movie, ratingS, titleS}) {
    return (
        <div className="List">
           {movie
        .filter(
          (el) =>
            el.rating >= ratingS &&
            el.title.toLowerCase().includes(titleS.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movies={el} />
        ))}
        </div>
    )
}
