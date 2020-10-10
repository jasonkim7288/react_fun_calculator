import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core';

const MyPaper =({ children, result}) => {
  if (result) {
    if (typeof result === 'number') {
      return (
        <Paper elevation={20} style={{backgroundColor: 'orange'}}>
          {children}
        </Paper>
      );
    } else {
      return (
        <Paper elevation={20} style={{backgroundColor: 'red'}}>
          {children}
        </Paper>
      );
    }
  } else {
    return (
      <Paper elevation={3}>
        {children}
      </Paper>
    )
  }
}

function CalcResult({result}) {
  return (
    <MyPaper result={result}>
      <Box p={3} mb={3}>
        <Typography variant="h5">
          = {result}
        </Typography>
      </Box>
    </MyPaper>
  )
}

export default CalcResult;
