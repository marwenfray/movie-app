import React from 'react'
import MovieRating from './MovieRating'
  const MovieCard =({ movies : {rating, title, cover, genre}})=> {
    return (
        <div className="Card" >
            
      
            <img src={cover}/>
            <div>
            <h2> {title} </h2>
            <h4>Genre: {genre} </h4>
            <MovieRating rating={rating} />
           </div>

            
        </div>
    )
    }
export default MovieCard