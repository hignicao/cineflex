import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import CineMain from "./CineMain";
import CineSession from "./CineSession";
import CineSeats from "./CineSeats";
import CineSuccess from "./CineSuccess";

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/" element={<CineMain />} />
				<Route path="/sessoes" element={<CineSession />} />
				<Route path="/assentos" element={<CineSeats />} />
				<Route path="/sucesso" element={<CineSuccess />} />
			</Routes>
		</BrowserRouter>
	);
}
