import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import CineMain from "./cineMain";
import CineSession from "./cineSession";
import CineSeats from "./cineSeats";
import CineSuccess from "./cineSuccess";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<CineMain />} />
				<Route path="/sessoes/:movieID" element={<CineSession />} />
				<Route path="/assentos/:sessionID" element={<CineSeats />} />
				<Route path="/sucesso" element={<CineSuccess />} />
			</Routes>
		</BrowserRouter>
	);
}
