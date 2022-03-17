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
    src: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
    releaseDate: "2010",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    title: "Interstellar",
    director: "Christopher Nolan",
    rating: 8.7,
    releaseDate: "2014",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    title: "Gladiator",
    director: "Ridley Scott",
    rating: 8.5,
    releaseDate: "2000",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    title: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    rating: 9,
    releaseDate: "2003",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    rating: 9.3,
    releaseDate: "1994",
  },
];

const shows = [
  {
    src: "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    title: "Breaking Bad",
    director: "Vince Gilligan",
    rating: 9.5,
    releaseDate: "2008-2013",
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
    src: "https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_FMjpg_UX1000_.jpg",
    title: "Sherlock",
    director: "Mark Gatiss & Steven Moffat",
    rating: 9.1,
    releaseDate: "2010-2017",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
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
                {item ? (
                  <div className={classes.content}>
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
                  </div>
                ) : (
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <hr />
      <br />
      <Typography variant="h5" className={classes.list}>
        Leo's Top 5 Shows
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
              <CardContent className={classes.content}>
                {item ? (
                  <>
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
                  </>
                ) : (
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function LeoList() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}
