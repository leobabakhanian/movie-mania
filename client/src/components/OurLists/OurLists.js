import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import LeoList from "./LeoList";
import VardgesList from "./VardgesList";

const OurLists = () => {
	return (
		<Grow in>
			<Container style={{ marginTop: 100, marginBottom: 50 }}>
				<Grid
					container
					justify="space-between"
					alignItems="stretch"
					spacing={3}
					style={{ marginTop: 25 }}
				>
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
