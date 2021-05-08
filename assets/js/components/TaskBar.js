import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: "8px",
    },
    title: {
      flexGrow: 1,
    },
  }));

const TaskBar = () => {

    const classes = useStyles();

    return (
      	<>
        	<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Ecommerce
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
        	</AppBar>
        	<Toolbar/>
      	</>
    )
}

export default TaskBar
