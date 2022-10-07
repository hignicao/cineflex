import { Link } from "react-router-dom";
import { DaysContainer, ListSessionsContainer } from "./styles";

export default function CineDays({ day }) {
	return (
		<DaysContainer>
			<p>
				{day.weekday} - {day.date}
			</p>
			<ListSessionsContainer>
				{day.showtimes.map((el) => (
          <Link key={el.id} to={`/assentos/${el.id}`}>
					  <button>{el.name}</button>
          </Link>
				))}
			</ListSessionsContainer>
		</DaysContainer>
	);
}