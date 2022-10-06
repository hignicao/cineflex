import styled from "styled-components";

export default function Header() {
	return (
		<HeaderContainer>
			<h1>CINEFLEX</h1>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	background-color: #c3cfd9;
	height: 67px;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		font-weight: 400;
		font-size: 34px;
		line-height: 40px;
		color: #e8833a;
	}
`;
