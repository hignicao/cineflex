import { SeatContainer } from "./styles";

export default function Seat({ seat }) {
	console.log(seat)
	return (
		<SeatContainer status={seat.isAvailable}>
			<p>{seat.name}</p>
		</SeatContainer>
	);
}
