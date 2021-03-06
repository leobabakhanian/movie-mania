import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Grow } from "@mui/material";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=eed0702d";

const Movies = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("");
	}, []);

	return (
		<Grow in>
			<div className="app">
				<div className="search">
					<input
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder="Search for movies"
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								searchMovies(searchTerm);
							}
						}}
					/>
					<IconButton onClick={() => searchMovies(searchTerm)}>
						<SearchIcon style={{ color: "#fff", fontSize: 30 }} />
					</IconButton>
				</div>
				{movies?.length > 0 ? (
					<div className="movie-container">
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
		</Grow>
	);
};

export default Movies;
