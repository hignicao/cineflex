import styled from "styled-components";

export const CineSessionContainer = styled.div`
	margin: 100px 0px 30px 0px;
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

export const ListDaysContainer = styled.div`
	margin: 30px 0px 100px 0px;
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

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
