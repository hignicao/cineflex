import styled from "styled-components";

export const CineSeatsContainer = styled.div`
	margin: 100px 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	> p {
		font-weight: 400;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #293845;
	}
`;
export const SeatsNumberContainer = styled.div`
	width: 85%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
	padding: 30px 0px;
`;

export const SeatLegendsContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SeatLegend = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	div {
		width: 25px;
		height: 25px;
		background: ${({ color }) => (color === "green" ? "#1aae9e" : color === "gray" ? "#C3CFD9" : "#FBE192")};
		border: 1px solid ${({ color }) => (color === "green" ? "#0E7D71" : color === "gray" ? "#7B8B99" : "#F7C52B")};
		border-radius: 17px;
	}
`;

export const InputsContainer = styled.div``;

export const FooterInfoContainer = styled.div`
	position: fixed;
	bottom: 0;
	height: 117px;
	width: 100%;
	padding: 10px;
	background: #dfe6ed;
	border: 1px solid #9eadba;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
	img {
		width: 64px;
		border: solid 8px white;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 2px;
	}
	p {
		font-weight: 400;
		font-size: 26px;
		line-height: 30px;
		color: #293845;
	}
`;
