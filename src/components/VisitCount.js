import React, { useContext, useState, useEffect } from 'react';
import { VisitCountContext } from '../contexts/VisitCountContext';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function VisitCount() {
  const [visitCount, setVisitCount] = useContext(VisitCountContext);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CALC_SERVER_URL}/count`)
      .then(res => {
        setVisitCount(state => res.data.count);
    })
  }, []);

  useEffect(() => {
    setOpen(true);
  }, [visitCount]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      { visitCount &&
        (
          <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
            {`People have used this app ${visitCount} times!`}
          </MuiAlert>
        )
      }
    </Snackbar>
  )
}

export default VisitCount;
