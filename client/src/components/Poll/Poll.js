import React from "react";
import { Grid, Typography, Box, LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Poll = ({ setCurrentId }) => {
  const polls = useSelector((state) => state.polls);
  return (
    <Grid container>
      {polls.map((poll) => (
        <Grid item xs={12} sm={12} style={{ width: "100%", padding: 10 }}>
          <Typography variant="h6">{poll.name}'s List</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
              <LinearProgress
                variant="determinate"
                value={Math.round(poll.poll.length / poll.length)}
              />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                {`${Math.round(poll.poll.length / poll.length)}%`}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Poll;
