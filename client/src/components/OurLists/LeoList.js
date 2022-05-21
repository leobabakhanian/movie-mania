import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import useStyles from "./styles";
import StarIcon from "@mui/icons-material/Star";
import { Card, CardMedia, CardContent } from "@mui/material";
import inception from "../../images/posters/inception.jpg";
import interstellar from "../../images/posters/interstellar.jpg";
import gladiator from "../../images/posters/gladiator.jpg";
import lotr_3 from "../../images/posters/lotr_3.jpg";
import the_shawshank_redemption from "../../images/posters/the_shawshank_redemption.jpg";
import breaking_bad from "../../images/posters/breaking_bad.jpg";
import peaky_blinders from "../../images/posters/peaky_blinders.jpg";
import sherlock from "../../images/posters/sherlock.jpg";
import black_mirror from "../../images/posters/black_mirror.jpg";
import game_of_thrones from "../../images/posters/game_of_thrones.jpg";

const movies = [
	{
		src: inception,
		title: "Inception",
		director: "Christopher Nolan",
		rating: 8.8,
		releaseDate: "2010",
	},
	{
		src: interstellar,
		title: "Interstellar",
		director: "Christopher Nolan",
		rating: 8.7,
		releaseDate: "2014",
	},
	{
		src: gladiator,
		title: "Gladiator",
		director: "Ridley Scott",
		rating: 8.5,
		releaseDate: "2000",
	},
	{
		src: lotr_3,
		title: "The Lord of the Rings: The Return of the King",
		director: "Peter Jackson",
		rating: 9,
		releaseDate: "2003",
	},
	{
		src: the_shawshank_redemption,
		title: "The Shawshank Redemption",
		director: "Frank Darabont",
		rating: 9.3,
		releaseDate: "1994",
	},
];

const shows = [
	{
		src: breaking_bad,
		title: "Breaking Bad",
		director: "Vince Gilligan",
		rating: 9.5,
		releaseDate: "2008-2013",
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
		src: sherlock,
		title: "Sherlock",
		director: "Mark Gatiss & Steven Moffat",
		rating: 9.1,
		releaseDate: "2010-2017",
	},
	{
		src: black_mirror,
		title: "Black Mirror",
		director: "Charlie Brooker",
		rating: 8.8,
		releaseDate: "2011-2019",
	},
];

function Media() {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h5" className={classes.list}>
				Leo's Top 5 Movies
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
						{item ? (
							<div className={classes.content}>
								<Typography
									gutterBottom
									variant="body2"
									className={classes.title}
								>
									{index + 1}. {item.title} ({item.releaseDate})
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
								<br />
							</div>
						) : (
							<Box sx={{ pt: 0.5 }}>
								<Skeleton />
								<Skeleton width="60%" />
							</Box>
						)}
					</CardContent>
				</Card>
			))}
			<br />
			<Typography variant="h5" className={classes.list}>
				Leo's Top 5 Shows
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
							{index + 1}. {item.title} ({item.releaseDate})
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

export default function LeoList() {
	return (
		<Box sx={{ overflow: "hidden" }}>
			<Media />
		</Box>
	);
}
