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

const movies = [
	{
		src: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
		title: "Dark Knight",
		director: "Christopher Nolan",
		rating: 9.1,
		releaseDate: "2008",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
		title: "Avengers: Infinity War",
		director: "Anthony Russo & Joe Russo",
		rating: 8.5,
		releaseDate: "2018",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BODNlNmU4MGItMzQwZi00NGQyLWEyZWItYjFkNmI0NWI4NjBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
		title: "The Nice Guys",
		director: "Shane Black",
		rating: 7.4,
		releaseDate: "2016",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
		title: "Logan",
		director: "James Mangold",
		rating: 8.1,
		releaseDate: "2017",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BZjU0Yzk2MzEtMjAzYy00MzY0LTg2YmItM2RkNzdkY2ZhN2JkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
		title: "Jojo Rabbit",
		director: "Taika Waititi",
		rating: 7.9,
		releaseDate: "2003",
	},
];

const shows = [
	{
		src: "https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
		title: "Dexter",
		director: "James Manos Jr.",
		rating: 8.7,
		releaseDate: "2006-2013",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BMmY1NTk5N2QtYWQyOS00NjhiLWFhZmYtYWZmZGFlMjEzY2E2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
		title: "Barry",
		director: "Alec Berg & Bill Hader",
		rating: 8.3,
		releaseDate: "2018-",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
		title: "Game of Thrones",
		director: "David Benioff & D.B. Weiss",
		rating: 9.3,
		releaseDate: "2011-2019",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_FMjpg_UX1000_.jpg",
		title: "Peaky Blinders",
		director: "Steven Knight",
		rating: 8.8,
		releaseDate: "2013-2022",
	},
	{
		src: "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg",
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
			<Grid container spacing={1} style={{ paddingRight: 25 }}>
				{movies.map((item, index) => (
					<Grid item xs={12} sm={4} style={{ display: "flex" }}>
						<Card
							variant="outlined"
							classes={classes.card}
							style={{ width: "100%" }}
						>
							<CardMedia
								className={classes.media}
								image={item.src}
								title={item.title}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="body2"
									className={classes.title}
								>
									{item.title} ({item.releaseDate})
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
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
			<br />
			<hr />
			<br />
			<Typography variant="h5" className={classes.list}>
				Vardges' Top 5 Shows
			</Typography>
			<br />
			<Grid container spacing={1} style={{ paddingRight: 25 }}>
				{shows.map((item, index) => (
					<Grid item xs={12} sm={4} style={{ display: "flex" }}>
						<Card
							variant="outlined"
							classes={classes.card}
							style={{ width: "100%" }}
						>
							<CardMedia
								className={classes.media}
								image={item.src}
								title={item.title}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="body2"
									className={classes.title}
								>
									{item.title} ({item.releaseDate})
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
					</Grid>
				))}
			</Grid>
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
