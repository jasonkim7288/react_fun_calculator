import React, { useState } from 'react';
import { Box, FormControlLabel, Grid, Hidden, Switch, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  titleIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: "30px",
    color: theme.palette.warning[theme.palette.type]
  }
}))

function ChangeTheme({ handleChangeTheme }) {
  const classes = useStyles();
  const [darkThemeChecked, setDarkThemeChecked] = useState(true)

  const handleChange = ({target: {checked}}) => {
    setDarkThemeChecked(checked);
    handleChangeTheme(checked);
  };

  return (
    <Grid container alignItems="center" justify="flex-end" alignContent="flex-end">
      <Hidden smUp>
        <Grid item xs={5} sm={12}>
          <Typography variant="h2">
            <Icon className={`fas fa-calculator ${classes.titleIcon}`} />
          </Typography>
        </Grid>
      </Hidden>
      <Grid item xs={7} sm={12}>
        <FormControlLabel
          control={
            <Switch
              checked={darkThemeChecked}
              onChange={handleChange}
              name="checkedDark"
            />
          }
          label="Dark mode"
        />
      </Grid>
    </Grid>
)
}

export default ChangeTheme;
