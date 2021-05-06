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
                        <IconButton><MenuIcon/></IconButton>
                        <Typography variant="h6">ECommerce</Typography>
                    </Toolbar>
                </AppBar>  
                <Toolbar />
            </Fragment>
        )
    }
}
