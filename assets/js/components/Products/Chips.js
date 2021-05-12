import { Paper, makeStyles, Chip } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'none',
      listStyle: 'none',
      flexGrow: 1,
      padding: theme.spacing(0.5),
      margin: 0,
      overflowX: 'auto'
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

const Chips = ({tags}) => {

    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            {tags.map((tag) => {
                return (
                    <Chip
                        key={tag}
                        label={tag}
                        className={classes.chip}
                    />   
                );
            })}
        </Paper>
    )
}

export default Chips
