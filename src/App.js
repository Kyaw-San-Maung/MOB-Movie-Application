import { useEffect, useState } from 'react';
import './App.css';
import getAllData from './api/axiosConfig';
import Layout from './components/layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllData().then((res) => setMovies(res.data));
  },[])
  
  return (
    <>

      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home movies={movies}/>}></Route>
          </Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
