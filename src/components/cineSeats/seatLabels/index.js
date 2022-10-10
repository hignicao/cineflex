import { SeatLabel, SeatLabelsContainer} from "./styles";

export default function SeatLabels() {
	return (
		<SeatLabelsContainer>
			<SeatLabel data-identifier="seat-selected-subtitle" color="green">
				<div></div>
				<p>Selecionado</p>
			</SeatLabel>
			<SeatLabel data-identifier="seat-available-subtitle" color="gray">
				<div></div>
				<p>Disponível</p>
			</SeatLabel>
			<SeatLabel data-identifier="seat-unavailable-subtitle" color="red">
				<div></div>
				<p>Indisponível</p>
			</SeatLabel>
		</SeatLabelsContainer>
	);
}
