import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);
  // const movie = [
  // {title: 'Mean Girls'},
  // {title: 'Hackers'},
  // {title: 'The Grey'},
  // {title: 'Sunshine'},
  // {title: 'Ex Machina'},
  // ];

  useEffect(() => {
    fetch('http://localhost:8080/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* <div className="movie-list-display">
        <h1>Movies</h1>
          <ol> {movie.map((movie) => (
           <li>{movie.title}</li>))}
          </ol>
      </div> */}

      <div className="movie-list-input">
        <h1>Movies Inputs</h1>
          <ol> {movies.length > 0 ? (
            movies.map((movie) => (
           <li key={movie.id}>{movie.title}</li>
          ))
        ) :(<p>Loading</p>)
      }
      
          </ol>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
