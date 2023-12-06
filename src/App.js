import { useEffect, useState } from 'react';
import './App.css';
import getAllData from './api/axiosConfig';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllData().then((res) => setMovies(res.data));
  },[])
  
  return (
    <>
      {movies.map((movie) => (
        <>
          <div>
            <h2>{ movie.title}</h2>
          </div>
        </>
      ))}
    </>
  )
}

export default App;
