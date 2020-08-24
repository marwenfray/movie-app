import React,{useState}  from 'react';
import './App.css';
import MovieList from './components/MovieList'
import MovieAdd from './components/MovieAdd'
import MovieSearch from './components/MovieSearch'
function App() {
  const [movie,setMovie]= useState([
    {title:"Bloodshot",
     genre:"action, supernatural",
      cover:"https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg",
      rating:3,
       id:0},
    {title:"The Butterfly Effect", genre:"Drama, Sci-Fi, Thriller", cover:"https://m.media-amazon.com/images/M/MV5BODNiZmY2MWUtMjFhMy00ZmM2LTg2MjYtNWY1OTY5NGU2MjdjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",rating:4, id:1},
    {title:"Split", genre:"Horror, Thriller", cover:"https://m.media-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_.jpg",rating:4, id:2},
    {title:"Predestination", genre:" Action, Drama, Sci-Fi ", cover:"https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_UY1200_CR91,0,630,1200_AL_.jpg",rating:5, id:3},
    {title:"Snowpiercer", genre:"Action, Drama, Sci-Fi", cover:"https://m.media-amazon.com/images/M/MV5BMTQ3NzA1MTY3MV5BMl5BanBnXkFtZTgwNzE2Mzg5MTE@._V1_UY1200_CR89,0,630,1200_AL_.jpg",rating:2, id:4},
    {title:"Fifty Shades Of Grey", genre:"piece of shit", cover:"https://m.media-amazon.com/images/M/MV5BMjE1MTM4NDAzOF5BMl5BanBnXkFtZTgwNTMwNjI0MzE@._V1_.jpg",rating:4, id:5},
    {title:"Harry Potter", genre:" Adventure, Drama, Fantasy", cover:"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",rating:5, id:6},
    {title:"Mulan", genre:" Action, Adventure, Drama ", cover:"https://m.media-amazon.com/images/M/MV5BNzE2YzBlODItMWE1Ny00MjM2LTg1MjUtYzJiNGExZWMwYmYxXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",rating:3, id:7},
    {title:"Memoirs Of A Geisha", genre:"  Drama, Romance  ", cover:"https://m.media-amazon.com/images/M/MV5BMTYxMzM4NTEzOV5BMl5BanBnXkFtZTcwNDMwNjQzMw@@._V1_.jpg",rating:5, id:8}
    
  ])
const add=(event,newMovie) =>{ 
  event.preventDefault();
    
  return setMovie([...movie,newMovie])
  }
  const [titleS, setTitleS] = useState('')
  const [ratingS, setRatingS] = useState(1);

 

  
  return (
    <div className="App">
    <MovieSearch setTitleS={setTitleS} setRatingS={setRatingS} ratingS={ratingS}/>
    <div>  
   <MovieList  movie= {movie} titleS={titleS} ratingS={ratingS} />
   <MovieAdd movie={movie} add={add}/>
    </div>
    </div>
  );

  }
export default App;
