import styled from "styled-components";

export const SeatContainer = styled.div`
	width: 26px;
	height: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ status, selected }) => (selected ? "#1aae9e" : status ? "#C3CFD9" : "#fb9292")};
	border: 1px solid ${({ status, selected }) => (selected ? "#0E7D71" : status ? "#7B8B99" : "#f72b2b")};
	border-radius: 12px;
	p {
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		letter-spacing: 0.04em;
	}
`;
