import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';

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

	const [openMenu, setOpenMenu] = useState(false)
    const classes = useStyles();

    return (
      	<>
		  	<MenuDrawer open={openMenu} setOpen={setOpenMenu}/>
        	<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={() => setOpenMenu(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
