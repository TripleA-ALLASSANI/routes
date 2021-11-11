import React, { useState } from "react"
import Scroll from "../Scroll/Scroll"
import MovieList from "../MovieList/MovieList"
import './SearchBox.css'

function SearchBox({searchValue, addVideo}) {
	const [searchField, setSearchField] = useState("");
	const filteredMovies = searchValue.filter(
		movie  => {
			return (
				movie
				.title
				.toLowerCase()
				.includes(searchField.toLowerCase()) ||
				movie
				.rating
				.includes(searchField)
			);
		}
	);

	const handleChange = e => {
		let value = e.target.value;
        value.length > 2 && setSearchField(value);
	};

	const object = {
			"title": "Thrones",
			"rating": "18.22",
			"description": "Men and icy horrors beyond.",
			"posterURL": "https://m.media-amazon.com/images/I/61rvFbcvU5L._AC_SL1024_.jpg"
		};

	return (
		<>
			<section className="garamond">
				<div className='searchBar'>
					<input
						type="text"
						name="searchBar" 
						id="searchBar"
						className='form-control'
						onChange = {handleChange}
						placeholder='Type to search...'
					></input>
				<div className="Button">
					<button className="btn btn-success btn-lg" onClick={() => addVideo(object)}>Add</button>
				</div>
				</div>
				<Scroll>	
					{<MovieList movies={filteredMovies} />}
				</Scroll>
			</section>
		</>
	);
}

export default  SearchBox;
