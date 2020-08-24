import React from 'react'
import MovieRating from './MovieRating'

export default function MovieSearch({setTitleS,setRatingS,ratingS}) {
    return (
        <div>
            <div className="Search">
        <input
    
          type='text'
          placeholder='Type title name to search'
          onChange={e =>setTitleS(e.target.value)}
        />
        <MovieRating
          starI={setRatingS}
          rating={ratingS}
        />
      </div>
        </div>
    )
}
