import styled from "styled-components";

export default function Seat({ seat }) {
	return (
		<SeatContainer>
			<p>{seat.name}</p>
		</SeatContainer>
	);
}

const SeatContainer = styled.div`
	width: 26px;
	height: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #c3cfd9;
	border: 1px solid #808f9d;
	border-radius: 12px;
	p {
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		letter-spacing: 0.04em;
	}
`;
