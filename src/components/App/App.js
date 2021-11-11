import React, { useState, useEffect } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InitialData from './InitialData';
import SearchBox from '../SearchBox/SearchBox';


const App = () => {
	const [movies, setMovies] = useState([]);

  function addVideo(addObject) {
    setMovies([...movies, addObject])
  };
	
  useEffect(() => {
    setMovies(InitialData)
  }, []);

	return (
    <div className="App">
      <SearchBox searchValue={movies} addVideo={addVideo}/>
    </div>
	);
};

export default App;
