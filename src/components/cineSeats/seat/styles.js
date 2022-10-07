import styled from "styled-components";

export const SeatContainer = styled.div`
	width: 26px;
	height: 26px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ status }) => (status ? "#C3CFD9" : !status  ? "#fb9292" : "#1aae9e" )};
		border: 1px solid ${({ status }) => (status ? "#7B8B99" : !status  ? "#f72b2b" : "#0E7D71" )};
	border-radius: 12px;
	p {
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		letter-spacing: 0.04em;
	}
`;