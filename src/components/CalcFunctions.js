import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core';
import { convertNumArrayToWordFunc } from '../libs/convert';

function CalcFunctions({ expArr }) {
  const expStr = convertNumArrayToWordFunc(expArr)

  console.log('expStr:', expStr)

  return (
    <Paper elevation={3}>
      <Box p={3} mb={3}>
        <Typography variant="h5" style={{overflowWrap: "break-word"}}>
          {expStr}
        </Typography>
      </Box>
    </Paper>
  )
}

export default CalcFunctions
