import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import { Person } from '@material-ui/icons';

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

const TaskBar = ({ login, toggleTheme, categories, changeCategories}) => {
	const theme = useTheme();
	const [openMenu, setOpenMenu] = useState(false)
    const classes = useStyles(theme);

    return (
      	<>
		  	<MenuDrawer open={openMenu} setOpen={setOpenMenu} toggleTheme={toggleTheme} login={login} categories={categories} changeCategories={changeCategories}/>
        	<AppBar position="fixed">
				<Toolbar>
					<IconButton onClick={() => setOpenMenu(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Ecommerce
					</Typography>
					{login.user ? 
						<IconButton><Person/></IconButton>:
						<Button color="inherit" onClick={() => login.setDialog(true)}>Login</Button>
					}

				</Toolbar>
        	</AppBar>
        	<Toolbar/>
      	</>
    )
}

export default TaskBar
