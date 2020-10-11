import React, { useContext, useEffect, Fragment} from 'react';
import { CalcHistoryContext } from '../contexts/CalcHistoryContext';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Icon, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 460
  },
  tableCell: {
    wordBreak: "break-word",
    fontSize: '1.5rem'
  }
});

function CalcHistory() {
  const classes = useStyles();
  const [history, setHistory] = useContext(CalcHistoryContext);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CALC_SERVER_URL}/calc-history`)
      .then(res => {
        setHistory(state => res.data);
      })
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_CALC_SERVER_URL}/calc-history/${e.target.id}`)
      .then(res => {
        return axios.get(`${process.env.REACT_APP_CALC_SERVER_URL}/calc-history`);
      })
      .then(res => {
        setHistory(state => res.data);
      })
  };

  return (
    <Fragment>
      <Box mt={2} mb={3}>
        <Typography variant="h4">
            History
        </Typography>
      </Box>

      <Box mb={10}>
        <Paper className={classes.root} elevation={3}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table" >
              <TableHead>
                <TableRow style={{fontSize: '1.5em'}}>
                  <TableCell className={classes.tableCell} key='exp' align='center' style={{ minWidth: '100px', maxWidth: '80%' }}>Expression</TableCell>
                  <TableCell className={classes.tableCell} key='remove' align='center'>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.map(h => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={h._id}>
                      <TableCell className={classes.tableCell} key='exp' align='left'>{`${h.expression} = ${h.result}`}</TableCell>
                      <TableCell className={classes.tableCell} key='remove' align='center'>
                        <Link  href="#"  color="error">
                          <Icon id={h._id} className='far fa-trash-alt' onClick={handleClick} />
                        </Link>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Fragment>
  )
}

export default CalcHistory
