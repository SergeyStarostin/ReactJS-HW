import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const toCelsius = (f) => {
    return ((f - 32) * 5) / 9;
  };

  const toFahrenheit = (c) => {
    return (c * 9) / 5 + 32;
  };

  const controlCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);

    if (!isNaN(celsiusValue) && celsiusValue !== "") {
      setFahrenheit(toFahrenheit(parseFloat(celsiusValue)).toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const controlFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);

    if (!isNaN(fahrenheitValue) && fahrenheitValue !== "") {
      setCelsius(toCelsius(parseFloat(fahrenheitValue)).toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <Grid
      container
      spacing={1}
      style={{ align: "left", maxWidth: 300, margin: "auto", padding: 10 }}
    >
      <Grid item xs={12}>
        <TextField
          label="Цельсий"
          variant="outlined"
          fullWidth
          value={ celsius }
          onChange={ controlCelsiusChange }
          type="number"
          inputProps={{ step: "0.01" }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Фаренгейт"
          variant="outlined"
          fullWidth
          value={ fahrenheit }
          onChange={ controlFahrenheitChange }
          type="number"
          inputProps={{ step: "0.01" }}
        />
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
