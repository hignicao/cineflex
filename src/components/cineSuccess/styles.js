import styled from "styled-components";

export const SuccessContainer = styled.div`
	margin: 100px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 50px;
	> p {
		padding: 0px 30px;
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #247a6b;
		text-align: center;
	}
	button {
		width: 225px;
		height: 42px;
		background: #e8833a;
		border: none;
		border-radius: 3px;
		font-size: 18px;
		line-height: 21px;
		letter-spacing: 0.04em;
		color: #ffffff;
	}
`;

export const InfoContainer = styled.div`
	max-width: 350px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	> p {
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
		color: #293845;
	}
`;

export const InfoWrapper = styled.div`
	margin-bottom: 20px;
	> p {
		font-weight: 400;
		font-size: 22px;
		line-height: 26px;
		letter-spacing: 0.04em;
		color: #293845;
	}
`;
