import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import CineMain from "./cineMain";
import CineSession from "./cineSession";
import CineSeats from "./cineSeats";
import CineSuccess from "./cineSuccess";

export default function App() {
	const [finalMovie, setFinalMovie] = useState({})
	const [buyerName, setBuyerName] = useState("");
	const [buyerCPF, setBuyerCPF] = useState("");
	const [selectedSeats, setSelectedSeats] = useState([]);

	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header setSelectedSeats={setSelectedSeats}/>
			<Routes>
				<Route path="/" element={<CineMain />} />
				<Route path="/sessoes/:movieID" element={<CineSession />} />
				<Route
					path="/assentos/:sessionID"
					element={<CineSeats
										buyerName={buyerName}
										buyerCPF={buyerCPF}
										selectedSeats={selectedSeats}
										finalMovie={finalMovie}
										setBuyerName={setBuyerName}
										setBuyerCPF={setBuyerCPF}
										setSelectedSeats={setSelectedSeats}
										setFinalMovie={setFinalMovie}
									/>}
				/>
				<Route
					path="/sucesso"
					element={<CineSuccess
										buyerName={buyerName}
										buyerCPF={buyerCPF}
										selectedSeats={selectedSeats}
										finalMovie={finalMovie}
										setSelectedSeats={setSelectedSeats}
									/>}
				/>
			</Routes>
		</BrowserRouter>
	);
}
