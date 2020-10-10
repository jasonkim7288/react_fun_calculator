import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core';

function CalcExpression({ expArr }) {
  const expStr = expArr.join(' ');

  return (
    <Paper elevation={3}>
      <Box p={3} mb={3}>
        <Typography variant="h5">
          {expStr}
        </Typography>
      </Box>
    </Paper>
  )
}

export default CalcExpression
