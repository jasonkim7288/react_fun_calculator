import React from 'react';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  calcBtn: {
    height: '30px',
    minHeight: '30px',
    [theme.breakpoints.up('sm')]: {
      height: '70px',
      minHeight: '70px',
    }
  }
}))

function CalcButtons({ handleButton }) {
  const classes = useStyles();

  const buttons = [
    {label: 'Back', cmd: 'back', rowNum: 2}, {label: 'C', cmd: 'clear', rowNum: 2},
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    {label: '0', cmd: '0', rowNum: 3}, '/',
    {label: '=', cmd: 'exec', rowNum: 4, primary: true}
  ]

  let num = 0;
  const btnComponents = buttons.map(btn => {
    let label, cmd, rowNum, onClick;
    let color = "default";

    if (typeof btn === 'string') {
      label = btn;
      cmd = btn;
      rowNum = 1;
    } else {
      label = btn.label;
      cmd = btn.cmd;
      rowNum = btn.rowNum;
      if (btn.primary) {
        color = "primary";
      }
    }

    onClick = () => handleButton(cmd);

    return (
      <Grid item xs={rowNum*3} key={(++num).toString()}>
        <div>
        <Button
            variant="contained"
            color={color}
            onClick={onClick}
            fullWidth={true}
            className={classes.calcBtn}
        >
          <Typography variant="h5">
            <strong>{label}</strong>
          </Typography>
        </Button>
        </div>
      </Grid>
    );
  })
  return (
    <Box>
      <Grid container spacing={2}>
        {btnComponents}
      </Grid>
    </Box>
  );
}

export default CalcButtons;
