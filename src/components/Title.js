import React from 'react'
import { Box, Hidden, Icon, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  titleTopMargin: {
    marginTop: '30px'
  },
  titleIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: "40px",
    color: theme.palette.warning[theme.palette.type]
  }
}))

function Title() {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Box mt={0} mb={3}>
        <Typography variant="h2" className={classes.titleTopMargin}>
          <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
            <Icon className={`fas fa-calculator ${classes.titleIcon}`} />
            Fun Calculator
            <Icon className={`fas fa-calculator ${classes.titleIcon}`} />
          </Box>
        </Typography>
      </Box>
    </Hidden>
  )
}

export default Title;
