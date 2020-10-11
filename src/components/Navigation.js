import React from 'react'
import ChangeTheme from './ChangeTheme';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden, Typography, Icon } from '@material-ui/core';
import VisitCount from './VisitCount';

const useStyles = makeStyles(theme => ({
  titleIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: "30px",
    color: theme.palette.warning[theme.palette.type]
  }
}));

function Navigation({ handleChangeTheme }) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="flex-end" alignContent="flex-end">
      <Hidden smUp>
        <Grid item xs={5} sm={12}>
          <Typography variant="h2">
            <Icon className={`fas fa-calculator ${classes.titleIcon}`} />
          </Typography>
        </Grid>
      </Hidden>
      <ChangeTheme handleChangeTheme={handleChangeTheme}/>
      <VisitCount />
    </Grid>
  )
}

export default Navigation
