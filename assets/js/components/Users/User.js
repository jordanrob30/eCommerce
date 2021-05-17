import {
	Card,
	CardActions,
	CardContent,
	IconButton,
	makeStyles,
	Typography,
	useTheme,
} from "@material-ui/core";
import React from "react";
import Chips from "../Products/Chips";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const test = {
	id: 1,
	firstname: "abc",
	lastname: "abcde",
	email: "a@b.c",
	roles: ["abc", "abc"],
};

const useStyles = makeStyles((theme) => ({
	root: {
		// maxWidth: 345, original width style
		maxWidth: "100%",
		backgroundColor: theme.palette.primary.main,
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const User = ({ user, users }) => {
	const theme = useTheme();
	const classes = useStyles(theme);

	const handleDelete = () => {
		users.del(user.id);
	};

	const handleEdit = () => {
		users.edit(user.id);
	};

	return (
		<>
			<Card className={classes.root}>
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant="h5" component="h2">
							{user.firstname + " " + user.lastname}
						</Typography>
					</div>
					<Typography gutterBottom variant="body2" color="textSecondary">
						{user.email}
					</Typography>
				</CardContent>
				<CardActions disableSpacing className={classes.cardActions}>
					<Chips tags={user.roles} />
					<IconButton onClick={handleEdit} aria-label="Delete User">
						<EditIcon />
					</IconButton>
					<IconButton onClick={handleDelete} aria-label="Delete User">
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>
		</>
	);
};

export default User;
