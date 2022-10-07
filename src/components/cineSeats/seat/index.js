import { SeatContainer } from "./styles";

export default function Seat({ seat }) {
	return (
		<SeatContainer>
			<p>{seat.name}</p>
		</SeatContainer>
	);
}
