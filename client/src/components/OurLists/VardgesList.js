import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardMedia, CardContent } from "@mui/material";
import the_dark_knight from "../../images/posters/the_dark_knight.jpg";
import avengers_infinity_war from "../../images/posters/avengers_infinity_war.jpg";
import logan from "../../images/posters/logan.jpg";
import the_nice_guys from "../../images/posters/the_nice_guys.jpg";
import jojo_rabbit from "../../images/posters/jojo_rabbit.jpg";
import dexter from "../../images/posters/dexter.jpg";
import barry from "../../images/posters/barry.jpg";
import game_of_thrones from "../../images/posters/game_of_thrones.jpg";
import peaky_blinders from "../../images/posters/peaky_blinders.jpg";
import family_guy from "../../images/posters/family_guy.jpg";

const movies = [
	{
		src: the_dark_knight,
		title: "Dark Knight",
		director: "Christopher Nolan",
		rating: 9.1,
		releaseDate: "2008",
	},
	{
		src: avengers_infinity_war,
		title: "Avengers: Infinity War",
		director: "Anthony Russo & Joe Russo",
		rating: 8.5,
		releaseDate: "2018",
	},
	{
		src: the_nice_guys,
		title: "The Nice Guys",
		director: "Shane Black",
		rating: 7.4,
		releaseDate: "2016",
	},
	{
		src: logan,
		title: "Logan",
		director: "James Mangold",
		rating: 8.1,
		releaseDate: "2017",
	},
	{
		src: jojo_rabbit,
		title: "Jojo Rabbit",
		director: "Taika Waititi",
		rating: 7.9,
		releaseDate: "2019",
	},
];

const shows = [
	{
		src: dexter,
		title: "Dexter",
		director: "James Manos Jr.",
		rating: 8.7,
		releaseDate: "2006-2013",
	},
	{
		src: barry,
		title: "Barry",
		director: "Alec Berg & Bill Hader",
		rating: 8.3,
		releaseDate: "2018-",
	},
	{
		src: game_of_thrones,
		title: "Game of Thrones",
		director: "David Benioff & D.B. Weiss",
		rating: 9.3,
		releaseDate: "2011-2019",
	},
	{
		src: peaky_blinders,
		title: "Peaky Blinders",
		director: "Steven Knight",
		rating: 8.8,
		releaseDate: "2013-2022",
	},
	{
		src: family_guy,
		title: "Family Guy",
		director: "Seth MacFarlane & David Zuckerman",
		rating: 8.2,
		releaseDate: "1999-",
	},
];

function Media() {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h5" className={classes.list}>
				Vardges' Top 5 Movies
			</Typography>
			<br />
			{movies.map((item, index) => (
				<Card
					variant="outlined"
					classes={classes.card}
					style={{
						width: "100%",
						display: "flex",
						marginBottom: 10,
					}}
				>
					<CardMedia image={item.src} sx={{ width: 100 }} />
					<CardContent sx={{ pl: 4 }}>
						<Typography gutterBottom variant="body2" className={classes.title}>
							{index + 1}: {item.title} ({item.releaseDate})
						</Typography>
						<Typography
							display="block"
							variant="caption"
							color="text.secondary"
						>
							{item.director}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							<Rating
								value={item.rating / 2}
								precision={0.1}
								readOnly
								emptyIcon={<StarIcon style={{ opacity: 1 }} />}
							/>
						</Typography>
					</CardContent>
				</Card>
			))}
			<br />
			<Typography variant="h5" className={classes.list}>
				Vardges' Top 5 Shows
			</Typography>
			<br />
			{shows.map((item, index) => (
				<Card
					variant="outlined"
					classes={classes.card}
					style={{
						width: "100%",
						display: "flex",
						marginBottom: 10,
					}}
				>
					<CardMedia image={item.src} sx={{ width: 100 }} />
					<CardContent sx={{ pl: 4 }}>
						<Typography gutterBottom variant="body2" className={classes.title}>
							{index + 1}: {item.title} ({item.releaseDate})
						</Typography>
						<Typography
							display="block"
							variant="caption"
							color="text.secondary"
						>
							{item.director}
						</Typography>
						<Typography variant="caption" color="text.secondary">
							<Rating
								value={item.rating / 2}
								precision={0.1}
								readOnly
								emptyIcon={<StarIcon style={{ opacity: 1 }} />}
							/>
						</Typography>
					</CardContent>
				</Card>
			))}
		</>
	);
}

export default function VardgesList() {
	return (
		<Box sx={{ overflow: "hidden" }}>
			<Media />
		</Box>
	);
}
