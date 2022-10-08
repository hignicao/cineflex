import styled from "styled-components";

export const SeatLabelsContainer = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const SeatLabel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	div {
		width: 25px;
		height: 25px;
		background: ${({ color }) => (color === "green" ? "#1aae9e" : color === "gray" ? "#C3CFD9" : "#fb9292")};
		border: 1px solid ${({ color }) => (color === "green" ? "#0E7D71" : color === "gray" ? "#7B8B99" : "#f72b2b")};
		border-radius: 17px;
	}
`;