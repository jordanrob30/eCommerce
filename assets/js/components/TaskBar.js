import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Brightness2Rounded, Brightness7Rounded } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React, {Component, Fragment} from 'react'

export default class TaskBar extends Component {

    

    render() {
        
        return (
            <Fragment>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" align="center">ECommerce</Typography>
                        <div style={{"flexGrow": 1}}/>
                        <IconButton edge="end" color="inherit" aria-label="menu">
                            {true ? <Brightness2Rounded/> : <Brightness7Rounded/>}
                        </IconButton>

                    </Toolbar>
                </AppBar>  
                <Toolbar />
            </Fragment>
        )
    }
}
