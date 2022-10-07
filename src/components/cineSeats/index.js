import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seat from "./seat";
import SeatLabels from "./seatLabels";
import { CineSeatsContainer, FooterInfoContainer, InputsContainer, SeatsNumberContainer } from "./styles";

export default function CineSeats() {
	const [sessionSeats, setSessionSeats] = useState(undefined);
	const [error, setError] = useState(false);
	const { sessionID } = useParams();

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
	}, [sessionID]);

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
			<SeatLabels />
			<InputsContainer>
					<label htmlFor="buyer-name">Nome do Comprador:</label>
					<input type="text" placeholder="Digite seu nome" />
					<label htmlFor="buyer-cpf">CPF do comprador:</label>
					<input type="text" placeholder="Digite seu CPF" />
					<button type="submit">Reservar assento(s)</button>
			</InputsContainer>
			<FooterInfoContainer>
				<img src={sessionSeats.movie.posterURL} alt="Poster do filme selecionado" />
				<div>
					<p>{sessionSeats.movie.title}</p>
					<p>
						{sessionSeats.day.weekday} - {sessionSeats.name}
					</p>
				</div>
			</FooterInfoContainer>
		</CineSeatsContainer>
	);
}
