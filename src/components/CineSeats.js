import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function CineSeats() {
	const [sessionSeats, setSessionSeats] = useState(undefined);
	const [error, setError] = useState(false);
	const { sessionID } = useParams();
  console.log(sessionSeats)

	useEffect(() => {
		const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;

		const promise = axios.get(URL);

		promise.then((res) => {
			setSessionSeats(res.data);
		});

		promise.catch((err) => {
			console.log(err.response.data);
			setError(true);
		});
	}, []);

	if (error === true) {
		return (
			<CineSeatsContainer>
				<p>Erro na requisição! Tente de novo</p>
			</CineSeatsContainer>
		);
	}

	if (!error && sessionSeats === undefined) {
		return (
			<CineSeatsContainer>
				<p>Carregando...</p>
			</CineSeatsContainer>
		);
	}

	return (
		<CineSeatsContainer>
			<p>Selecione o(s) assento(s):</p>
			<SeatsNumberContainer>
				{sessionSeats.seats.map((el) => (
					<Seat key={el.id} seat={el} />
				))}
			</SeatsNumberContainer>
			<SeatLegendsContainer>
				<SeatLegend color="green">
					<div></div>
					<p>Selecionado</p>
				</SeatLegend>
				<SeatLegend color="gray">
					<div></div>
					<p>Disponível</p>
				</SeatLegend>
				<SeatLegend color="yellow">
					<div></div>
					<p>Indisponível</p>
				</SeatLegend>
			</SeatLegendsContainer>
			<InputsContainer>
				{/* <form action="">
					<label htmlFor="buyer-name">Nome do Comprador:</label>
					<input type="text" placeholder="Digite seu nome" />
					<label htmlFor="buyer-cpf">CPF do comprador:</label>
					<input type="text" placeholder="Digite seu CPF" />
					<button type="submit">Reservar assento(s)</button>
				</form> */}
			</InputsContainer>
			<FooterInfoContainer>
        <img src={sessionSeats.movie.posterURL} alt="Poster do filme selecionado" />
        <div>
          <p>{sessionSeats.movie.title}</p>
          <p>{sessionSeats.day.weekday} - {sessionSeats.name}</p>
        </div>
      </FooterInfoContainer>
		</CineSeatsContainer>
	);
}

const CineSeatsContainer = styled.div`
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
const SeatsNumberContainer = styled.div`
	width: 85%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 12px;
	padding: 30px 0px;
`;

const SeatLegendsContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const SeatLegend = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	div {
		width: 25px;
		height: 25px;
		background: ${({ color }) => (color === "green" ? "#1aae9e" : color === "gray" ? "#C3CFD9" : "#FBE192")};
		border: 1px solid ${({ color }) => (color === "green" ? "#0E7D71" : color === "gray" ? "#7B8B99" : "#F7C52B")};
		border-radius: 17px;
	}
`;

const InputsContainer = styled.div``;

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
