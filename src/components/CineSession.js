import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CineDays from "./CineDays";

export default function CineSession() {
	const [movieSessions, setMovieSessions] = useState(undefined);
	const [error, setError] = useState(false);
	const { movieID } = useParams();

	useEffect(() => {
		const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`;

		const promise = axios.get(URL);

		promise.then((res) => {
			setMovieSessions(res.data);
		});

		promise.catch((err) => {
			console.log(err.response.data);
			setError(true);
		});
	}, []);

	if (error === true) {
		return (
			<CineSessionContainer>
				<p>Erro na requisição! Tente de novo</p>
			</CineSessionContainer>
		);
	}

	if (!error && movieSessions === undefined) {
		return (
			<CineSessionContainer>
				<p>Carregando...</p>
			</CineSessionContainer>
		);
	}

	return (
		<CineSessionContainer>
			<p>Selecione o horário:</p>
			<ListDaysContainer>
				{movieSessions.days.map((el) => (
					<CineDays key={el.id} day={el} />
				))}
			</ListDaysContainer>
			<FooterInfoContainer>
				<img src={movieSessions.posterURL} alt="Poster do filme selecionado" />
				<p>{movieSessions.title}</p>
			</FooterInfoContainer>
		</CineSessionContainer>
	);
}

const CineSessionContainer = styled.div`
	margin: 100px 0px 30px 0px;
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

const ListDaysContainer = styled.div`
	margin: 30px 0px 100px 0px;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const FooterInfoContainer = styled.div`
	position: fixed;
	bottom: 0;
	height: 117px;
	width: 100%;
	padding: 10px;
	background: #dfe6ed;
	border: 1px solid #9eadba;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	img {
		width: 64px;
		border: solid 8px white;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
	}
	p {
		font-weight: 400;
		font-size: 26px;
		line-height: 30px;
		color: #293845;
	}
`;
