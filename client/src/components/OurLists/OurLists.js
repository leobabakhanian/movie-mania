import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import LeoList from "./LeoList";
import VardgesList from "./VardgesList";
import Poll from "../Poll/Poll";
import { getPolls } from "../../actions/polls";

const OurLists = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPolls());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container style={{ marginTop: 100, marginBottom: 25 }}>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          style={{ marginTop: 25 }}
        >
          <Grid item xs={12} sm={12}>
            <Paper variant="outlined" style={{ padding: 10 }}>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Vote for your favorite list! 🎬
              </Typography>
              <Poll />
              <Button>Leo</Button>
              <Button>Vardges</Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LeoList />
          </Grid>
          <Grid item xs={12} sm={6}>
            <VardgesList />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default OurLists;
