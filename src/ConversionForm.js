import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';

const ConversionForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [targetUnit, setTargetUnit] = useState('');
  const [studentResponse, setStudentResponse] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with query parameters
    const queryParams = {
      fromUnit: fromUnit,
      toUnit: targetUnit,
      value: inputValue,
      answer: studentResponse,
    };

    // Request output from backend
    axios
      .post(`http://44.200.11.34/api/unit-conversion`, queryParams)
      .then((response) => {
        setResult(response.data.message);
      })
      .catch((error) => {
        setResult(error.response.data.message);
      });
  };

  return (
    <Grid container direction='column' alignItems='center' justify='center'>
      <form onSubmit={handleSubmit}>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography sx={{ pt: 2 }} typography='h4'>
            Check Conversion
          </Typography>
        </Grid>
        <TextField
          label='Input Value'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='From Unit'
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Target Unit'
          value={targetUnit}
          onChange={(e) => setTargetUnit(e.target.value)}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Student Response'
          value={studentResponse}
          onChange={(e) => setStudentResponse(e.target.value)}
          fullWidth
          margin='normal'
        />
        <Grid item style={{ textAlign: 'center' }}>
          <Button type='submit' variant='contained' color='primary'>
            Submit
          </Button>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          {result ? <Typography typography='h5'>{result}</Typography> : <></>}
        </Grid>
      </form>
    </Grid>
  );
};

export default ConversionForm;
