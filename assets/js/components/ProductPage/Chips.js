import { Paper, makeStyles, Chip } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      flexgrow: 1,
      padding: theme.spacing(0.5),
      margin: 0,
      width: '100%'
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }));

const Chips = ({tags}) => {

    const classes = useStyles();

    return (
        <Paper elevation={0} component="ul" className={classes.root}>
            {tags.map((tag) => {
                return (
                    <li key={tag}>
                        <Chip
                        label={tag}
                        className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    )
}

export default Chips
