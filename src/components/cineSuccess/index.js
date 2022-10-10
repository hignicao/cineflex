import { useNavigate } from "react-router-dom";
import { InfoContainer, InfoWrapper, SuccessContainer } from "./styles";

export default function CineSuccess({ buyerName, buyerCPF, selectedSeats, finalMovie, setSelectedSeats }) {
	const navigate = useNavigate();

	function resetSection() {
		setSelectedSeats([]);
		navigate("/");
	}

	return (
		<SuccessContainer>
			<p>Pedido feito com sucesso!</p>
			<InfoContainer>
				<p>Filme e sessão:</p>
				<InfoWrapper>
					<p data-identifier="movie-session-infos-reserve-finished">{finalMovie.movie.title}</p>
					<p data-identifier="movie-session-infos-reserve-finished">
						{finalMovie.day.weekday} - {finalMovie.name}
					</p>
				</InfoWrapper>
				<p>Ingressos:</p>
				<InfoWrapper>
					{selectedSeats.map((seat) => (
						<p data-identifier="seat-infos-reserve-finished" key={seat.id}>Assento {seat.name}</p>
					))}
				</InfoWrapper>
				<p>Comprador:</p>
				<InfoWrapper>
					<p data-identifier="buyer-infos-reserve-finished">Nome: {buyerName}</p>
					<p data-identifier="buyer-infos-reserve-finished">CPF: {buyerCPF}</p>
				</InfoWrapper>
			</InfoContainer>
			<button data-identifier="back-to-home-btn" onClick={resetSection}>Voltar pra Home</button>
		</SuccessContainer>
	);
}
