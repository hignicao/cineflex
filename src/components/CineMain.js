import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

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

const CineMainContainer = styled.div`
	margin: 100px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> p {
		font-weight: 400;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #293845;
	}
`;

const MoviesListContainer = styled.div`
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const MovieLink = styled(Link)`
	width: 145px;
	padding: 8px;
	background: #ffffff;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
`;

const MoviePoster = styled.div`
	position: relative;
	width: 129px;
	display: flex;
	img {
		width: 100%;
		border-radius: 3px;
	}
	:hover div {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: 3px;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 65%);
	}
	span {
		display: none;
		color: white;
		width: 100%;
		position: absolute;
		left: 0px;
		bottom: 15px;
		padding: 0 15px;
		text-align: center;
		font-size: 12px;
		font-weight: 500;
	}
	:hover span {
		display: inline;
	}
`;
