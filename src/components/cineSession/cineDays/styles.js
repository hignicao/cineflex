import styled from "styled-components";

export const DaysContainer = styled.div`
	p {
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		letter-spacing: 0.02em;
	}
`;

export const ListSessionsContainer = styled.div`
  padding: 20px 0px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
	button {
		width: 83px;
		height: 43px;
		border: none;
		background: #e8833a;
		border-radius: 3px;
		font-weight: 400;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.02em;
		color: #ffffff;
    cursor: pointer;
	}
`;
