import { useEffect, useState } from "react";
import axios from "axios";
import { CineMainContainer, Loading, MovieLink, MoviePoster, MoviesListContainer } from "./styles";

export default function CineMain() {
	const [movies, setMovies] = useState(undefined);
	const [error, setError] = useState(false);

	useEffect(() => {
		const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";

		const promise = axios.get(URL);

		promise.then((res) => {
			setMovies(res.data);
		});

		promise.catch((err) => {
			console.log(err.response.data);
			setError(true);
		});
	}, []);

	if (error === true) {
		return (
			<CineMainContainer>
				<p>Erro na requisição! Tente de novo</p>
			</CineMainContainer>
		);
	}

	if (!error && movies === undefined) {
		return (
			<CineMainContainer>
				<Loading>
					<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
					<p>Carregando...</p>
				</Loading>
			</CineMainContainer>
		);
	}

	return (
		<CineMainContainer>
			<p>Selecione o filme:</p>
			<MoviesListContainer>
				{movies.map((movie) => (
					<MovieLink data-identifier="movie-outdoor" key={movie.id} to={`/sessoes/${movie.id}`}>
						<MoviePoster>
							<img src={movie.posterURL} alt={`Poster do filme ${movie.title}`} />
							<div></div>
							<span>{movie.title}</span>
						</MoviePoster>
					</MovieLink>
				))}
			</MoviesListContainer>
		</CineMainContainer>
	);
}
