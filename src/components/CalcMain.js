import React, { useState, useContext } from 'react'
import { Box, Grid } from '@material-ui/core';
import CalcButtons from './CalcButtons';
import CalcFunctions from './CalcFunctions';
import CalcHistory from './CalcHistory';
import CalcExpression from './CalcExpression';
import { convertNumArrayToWordFunc } from '../libs/convert';
import axios from 'axios';
import CalcResult from './CalcResult';
import { CalcHistoryContext } from '../contexts/CalcHistoryContext'

function CalcMain() {
  const [expArr, setExpArr] = useState([]);
  const [result, setResult] = useState(null);
  const [, setHistory] = useContext(CalcHistoryContext)
  const handleButton = (cmd) => {
    const num = parseInt(cmd);
    const lastElement = expArr.length === 0 ? null : expArr[expArr.length - 1];
    const lastElementNum = parseInt(lastElement);
    const restElements = expArr.length === 0 ? [] : expArr.slice(0, expArr.length - 1);

    if (cmd !== 'exec') {
      setResult(null);
    }

    if (lastElement === null && cmd.length === 1) {
      if (cmd !== '0') {
        setExpArr([cmd]);
      }
    } else if(!isNaN(num)) {
      if (isNaN(lastElementNum)) {
        setExpArr([...expArr, cmd]);
      } else if(lastElement.length < 9){
        setExpArr([...restElements, lastElement + cmd]);
      }
    } else {
      switch(cmd) {
        case '+':
        case '-':
        case '*':
        case '/':
          setExpArr([...expArr, cmd]);
          break;
        case 'back':
          if (isNaN(lastElementNum) || lastElement.length === 1) {
            setExpArr([...restElements])
          } else {
            setExpArr([...restElements, lastElement.slice(0, lastElement.length - 1)])
          }
          break;
        case 'clear':
          setExpArr([]);
          break;
        case 'exec':
          axios.get(`${process.env.REACT_APP_CALC_SERVER_URL}?calc=${convertNumArrayToWordFunc(expArr)}`)
            .then(res => {
              setResult(res.data.result);
              axios.get(`${process.env.REACT_APP_CALC_SERVER_URL}/calc-history`)
                .then(res => {
                  setHistory(state => res.data);
                  console.log('res:', res)
                })
            }).catch(err => {
              setResult('Calculation error!')
            });
          break;
        default:
          break;
      }
    }
  }

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CalcButtons handleButton={handleButton}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CalcExpression expArr={expArr}/>
          <CalcFunctions expArr={expArr}/>
          <CalcResult result={result} />
        </Grid>
        <Grid item xs={12}>
          <CalcHistory />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CalcMain;
