import React from 'react'

export default function MovieRating({rating, starI}) {
    const stars = (x) => {
        let stArr = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= x) {
            stArr.push(
              <span
                className="rating"
                key={i}
                style={{ cursor: 'pointer' }}
                onClick={() => starI(i)}
              >
                ★
              </span>
            );
          } else {
            stArr.push(
              <span
                className="rating"
                key={i}
                style={{ cursor: 'pointer' }}
                onClick={() => starI(i)}
              >
                ☆
              </span>
            );
          }
        }
        return stArr;
      };
    
      return <div className="Rating">{stars(rating)}</div>;
}
MovieRating.defaultProps = {
    starI: () => {},
    rating: 1,
  };