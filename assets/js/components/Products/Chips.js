import { Paper, makeStyles, Chip } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "none",
		listStyle: "none",
		flexGrow: 1,
		padding: theme.spacing(0.5),
		margin: 0,
		overflowX: "auto",
		backgroundColor: theme.palette.primary.main,
	},
	chip: {
		margin: theme.spacing(0.5),
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.common.white,
	},
}));

/**
 * @prop  {string[]} {tags} array of tag names
 */
const Chips = ({ tags }) => {
	const classes = useStyles();

	return (
		<Paper elevation={0} className={classes.root}>
			{tags.map((tag) => {
				return <Chip key={tag} label={tag} className={classes.chip} />;
			})}
		</Paper>
	);
};

export default Chips;
