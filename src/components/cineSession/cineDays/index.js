import { Link } from "react-router-dom";
import { DaysContainer, ListSessionsContainer } from "./styles";

export default function CineDays({ day }) {
	return (
		<DaysContainer>
			<p>
				{day.weekday} - {day.date}
			</p>
			<ListSessionsContainer>
				{day.showtimes.map((time) => (
          <Link key={time.id} to={`/assentos/${time.id}`}>
					  <button>{time.name}</button>
          </Link>
				))}
			</ListSessionsContainer>
		</DaysContainer>
	);
}