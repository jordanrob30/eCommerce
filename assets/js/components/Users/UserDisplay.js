import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

import { User } from "..";

const useStyles = makeStyles(() => ({
	grid: {
		padding: 16,
	},
}));

const UserDisplay = ({ users }) => {
	const classes = useStyles();

	return (
		<div>
			<Grid container justify="center" spacing={2} className={classes.grid}>
				{users.users.map((user) => (
					<Grid key={user.id} item xs={12} sm={6} md={4} lg={12} xl={6}>
						<User user={user} users={users} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default UserDisplay;
