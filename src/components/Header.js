import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header({ setSelectedSeats }) {
	const navigate = useNavigate();

	function resetSection() {
		setSelectedSeats([]);
		navigate("/");
	}

	return (
		<HeaderContainer>
			<h1 onClick={resetSection}>CINEFLEX</h1>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;
	background-color: #c3cfd9;
	height: 67px;
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		font-weight: 500;
		font-size: 34px;
		line-height: 40px;
		color: #e8833a;
		cursor: pointer;
	}
`;
