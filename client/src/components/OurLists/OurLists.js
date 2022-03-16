import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import LeoList from "./LeoList";
import VardgesList from "./VardgesList";

const OurLists = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

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
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              background: "#D3D3D3",
              paddingBottom: 25,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          >
            <h6>Leo's List</h6>
            <LeoList />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              background: "#FFCCCB",
              paddingBottom: 25,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <h6>Vardges' List</h6>
            <VardgesList />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default OurLists;
