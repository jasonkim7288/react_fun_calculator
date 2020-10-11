import React, { useState } from 'react';
import { FormControlLabel, Grid, Switch } from '@material-ui/core';


function ChangeTheme({ handleChangeTheme }) {
  const [darkThemeChecked, setDarkThemeChecked] = useState(true)

  const handleChange = ({target: {checked}}) => {
    setDarkThemeChecked(checked);
    handleChangeTheme(checked);
  };

  return (
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
)
}

export default ChangeTheme;
