import { Link } from "react-router-dom";
import styled from "styled-components";

const filmes = [
	{
		id: 1,
		title: "2067",
		posterURL: "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
		overview:
			"A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
		releaseDate: "2020-10-01T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
	{
		id: 2,
		title: "Welcome to Sudden Death",
		posterURL: "https://image.tmdb.org/t/p/w500/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg",
		overview:
			"Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
		releaseDate: "2020-09-29T00:00:00.000Z",
	},
];

export default function CineMain() {
	return (
		<CineMainContainer>
			<p>Selecione o filme:</p>
			<MoviesListContainer>
				{filmes.map((el) => (
					<MovieLink>
						<MoviePoster>
							<img src={el.posterURL} alt="Poster do Filme" />
							<div></div>
							<span>{el.title}</span>
						</MoviePoster>
					</MovieLink>
				))}
			</MoviesListContainer>
		</CineMainContainer>
	);
}

const CineMainContainer = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	p {
		font-weight: 400;
		font-size: 24px;
		line-height: 28px;
		letter-spacing: 0.04em;
	}
`;

const MoviesListContainer = styled.div`
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const MovieLink = styled(Link)`
	width: 145px;
	padding: 8px;
	background: #ffffff;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
`;

const MoviePoster = styled.div`
	position: relative;
	width: 129px;
	display: flex;
	img {
		width: 100%;
		border-radius: 3px;
	}
	:hover div {
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: 3px;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 65%);
	}
	span {
		display: none;
		color: white;
		width: 100%;
		position: absolute;
		left: 0px;
		bottom: 15px;
		padding: 0 15px;
		text-align: center;
		font-size: 12px;
		font-weight: 500;
	}
	:hover span {
		display: inline;
	}
`;
