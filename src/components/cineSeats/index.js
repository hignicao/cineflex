import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Seat from "./seat";
import SeatLabels from "./seatLabels";
import { BackButton, CineSeatsContainer, FooterInfoContainer, InputsContainer, Loading, SeatsNumberContainer } from "./styles";

export default function CineSeats({ buyerName, setBuyerName, buyerCPF, setBuyerCPF, selectedSeats, setSelectedSeats, setFinalMovie }) {
	const [sessionSeats, setSessionSeats] = useState(undefined);
	const [error, setError] = useState(false);
	const { sessionID } = useParams();
	const navigate = useNavigate();

	function selectSeat(seat) {
		if (seat.isAvailable === false) {
			alert("Assento não disponível");
			return;
		}

		seat.selected = !seat.selected;

		if (!seat.selected) {
			const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
			setSelectedSeats([...filteredSeats]);
			return;
		}
		setSelectedSeats([...selectedSeats, seat]);
		return;
	}

	function reserveSeats(e) {
		e.preventDefault();

		const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
		const seatsIDs = [];

		selectedSeats.map((seat) => seatsIDs.push(seat.id));

		const body = {
			ids: seatsIDs,
			name: buyerName,
			cpf: buyerCPF,
		};

		const promise = axios.post(URL, body);

		promise.then(() => {
			navigate("/sucesso");
		});

		promise.catch((err) => {
			alert(err.response.data.mensagem);
		});
	}

	useEffect(() => {
		const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`;

		const promise = axios.get(URL);

		promise.then((res) => {
			setSessionSeats(res.data);
			setFinalMovie(res.data);
		});

		promise.catch((err) => {
			console.log(err.response.data);
			setError(true);
		});
	}, [sessionID, setFinalMovie]);

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
				<Loading>
					<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
					<p>Carregando...</p>
				</Loading>
			</CineSeatsContainer>
		);
	}

	return (
		<CineSeatsContainer>
			<BackButton onClick={() => navigate(-1)}>↩</BackButton>
			<p>Selecione o(s) assento(s):</p>
			<SeatsNumberContainer>
				{sessionSeats.seats.map((seat) => (
					<Seat key={seat.id} seat={seat} selectSeat={selectSeat} />
				))}
			</SeatsNumberContainer>
			<SeatLabels />
			<InputsContainer onSubmit={reserveSeats}>
				<label htmlFor="buyer-name">Nome do comprador:</label>
				<input
					data-identifier="buyer-name-input"
					required
					id="buyer-name"
					type="text"
					placeholder="Digite seu nome"
					onChange={(e) => setBuyerName(e.target.value)}
				/>
				<label htmlFor="buyer-cpf">CPF do comprador:</label>
				<input
					data-identifier="buyer-cpf-input"
					required
					id="buyer-cpf"
					type="text"
					placeholder="Digite seu CPF"
					maxLength="11"
					onChange={(e) => setBuyerCPF(e.target.value)}
				/>
				<button data-identifier="reservation-btn" type="submit">Reservar assento(s)</button>
			</InputsContainer>
			<FooterInfoContainer>
				<img src={sessionSeats.movie.posterURL} alt="Poster do filme selecionado" />
				<div>
					<p data-identifier="movie-and-session-infos-preview" >{sessionSeats.movie.title}</p>
					<p data-identifier="movie-and-session-infos-preview" >
						{sessionSeats.day.weekday} - {sessionSeats.name}
					</p>
				</div>
			</FooterInfoContainer>
		</CineSeatsContainer>
	);
}
