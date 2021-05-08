import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer, Typography } from '@material-ui/core'
import { CallToActionSharp, ChevronLeft, ChevronRight } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    text: {
        marginLeft: 24,
    },
    div: {
        display: 'flex', 
        justifyContent: 'flex-end',
        height: 64
    },
    
});

const MenuDrawer = ({open, setOpen}) => {
    const classes = useStyles();
    return (
        <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            
        >
            <div className={classes.div}>
                <IconButton onClick={() => setOpen(false)}>
                    <ChevronLeft style={{ fontSize: 32 }}/>
                </IconButton>
            </div>
            <Divider />
            <Typography variant="h5" className={classes.text}>Actions</Typography>
            <List className={classes.list}>
                {["Test 1", "Test 2", "Test 3"].map((action) => (
                    <ListItem button key={action} onClick={() => null}>
                        <ListItemIcon><ChevronRight/></ListItemIcon>
                        <ListItemText primary={action}/>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <Typography variant="h5" className={classes.text}>Categories</Typography>
            <List className={classes.list}>
                {["Test 1", "Test 2", "Test 3"].map((category) => (
                    <ListItem button key={category}>
                        <ListItemIcon><ChevronRight/></ListItemIcon>
                        <ListItemText primary={category}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>



        </SwipeableDrawer>
        
    )
}

export default MenuDrawer
