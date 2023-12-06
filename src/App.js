import { useEffect, useState } from 'react';
import './App.css';
import getAllData from './api/axiosConfig';
import Layout from "./components/layout";
import { Routes, Route } from 'react-router-dom';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllData().then((res) => setMovies(res.data));
  },[])
  
  return (
    <>
      {movies.map((movie) => (
        <>
          <div className='App'>
            <Routes>
              <Route path='/' element={Layout}>
                
              </Route>
            </Routes>
          </div>
        </>
      ))}
    </>
  )
}

export default App;
