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
					<p>{finalMovie.movie.title}</p>
					<p>
						{finalMovie.day.weekday} - {finalMovie.name}
					</p>
				</InfoWrapper>
				<p>Ingressos:</p>
				<InfoWrapper>
					{selectedSeats.map((seat) => (
						<p key={seat.id}>Assento {seat.name}</p>
					))}
				</InfoWrapper>
				<p>Comprador:</p>
				<InfoWrapper>
					<p>Nome: {buyerName}</p>
					<p>CPF: {buyerCPF}</p>
				</InfoWrapper>
			</InfoContainer>
			<button onClick={resetSection}>Voltar pra Home</button>
		</SuccessContainer>
	);
}
