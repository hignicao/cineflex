import { SeatContainer } from "./styles";

export default function Seat({ seat, selectSeat }) {
	return (
		<SeatContainer status={seat.isAvailable} selected={seat.selected} onClick={() => selectSeat(seat)}>
			<p>{seat.name}</p>
		</SeatContainer>
	);
}
