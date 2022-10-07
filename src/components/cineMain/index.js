import { useEffect, useState } from "react";
import axios from "axios";
import { CineMainContainer, MovieLink, MoviePoster, MoviesListContainer } from "./styles";

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
				<p>Carregando...</p>
			</CineMainContainer>
		);
	}

	return (
		<CineMainContainer>
			<p>Selecione o filme:</p>
			<MoviesListContainer>
				{movies.map((el) => (
					<MovieLink key={el.id} to={`/sessoes/${el.id}`}>
						<MoviePoster>
							<img src={el.posterURL} alt={`Poster do filme ${el.title}`} />
							<div></div>
							<span>{el.title}</span>
						</MoviePoster>
					</MovieLink>
				))}
			</MoviesListContainer>
		</CineMainContainer>
	);
}
