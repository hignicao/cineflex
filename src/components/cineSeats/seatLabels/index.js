import { SeatLabel, SeatLabelsContainer} from "./styles";

export default function SeatLabels() {
	return (
		<SeatLabelsContainer>
			<SeatLabel color="green">
				<div></div>
				<p>Selecionado</p>
			</SeatLabel>
			<SeatLabel color="gray">
				<div></div>
				<p>Disponível</p>
			</SeatLabel>
			<SeatLabel color="red">
				<div></div>
				<p>Indisponível</p>
			</SeatLabel>
		</SeatLabelsContainer>
	);
}
