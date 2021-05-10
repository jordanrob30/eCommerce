import { AppBar, Toolbar, Button, IconButton, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
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

const AdminTaskBar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Ecommerce Admin
					</Typography>
				</Toolbar>
        	</AppBar>
        	<Toolbar/>
        </>
    )
}

export default AdminTaskBar
