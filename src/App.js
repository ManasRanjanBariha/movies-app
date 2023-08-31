// import logo from "./logo.svg";
import "./App.css";
import searchImage from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// 90561078
const API_URL = "https://www.omdbapi.com?apikey=90561078";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    console.log("movies", movies);
  };
  // const [count, setCount] = useState(0)
  useEffect(() => {
    searchMovies("hulk");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value)}}
        />
        <img src={searchImage} alt="Search" onClick={() => {searchMovies(searchTerm) }} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
