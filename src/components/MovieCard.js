import React from 'react'
import MovieRating from './MovieRating'
  const MovieCard =({ movies : {rating, title, cover, genre}})=> {
    return (
        <div className="Card" >
            
      
            <img src={cover}/>
            <div>
            <h1>Title: {title} </h1>
            <h2>Genre: {genre} </h2>
            <MovieRating rating={rating} />
           </div>

            
        </div>
    )
    }
export default MovieCard