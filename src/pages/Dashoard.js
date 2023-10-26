import React, { useState, useEffect } from "react";
import LiveLineChart from "../components/LiveLineChart";

import { Box, Grid, Input, Slider, Typography } from "@mui/material";

import axios from 'axios';
import moment from "moment";
import { Container } from "@nivo/core";

const Dashboard = () => {

  const [maxNumDataPoints, setMaxNumDataPoints] = useState(30); // max number of data points to display on the chart

  // const initTime = moment.utc().format();
  const initTime = "2023-10-07T00:00:00.000Z";

  const [latestTime, setLatestTime] = useState(initTime); // latest time

  // create a state for each line chart's data
  // initialize each state with the latest datapoint
  const [pmData, setPmData] = useState([{ x: initTime, y: 0 }]);
  const [noxData, setNoxData] = useState([{ x: initTime, y: 0 }]);
  const [coData, setCoData] = useState([{ x: initTime, y: 0 }]);

  // poll the database for an array of all the new data (using '/latestDataGT/:startTime')
  // then append new data to the existing data
  const pollDatabase = () => {
    axios
      .get(
        "http://localhost:8080/api/vehicleData/latestDataGT/" + latestTime
      )
      .then((response) => {
        const data = response.data;

        if (data.length > 0) {
          setLatestTime(data[data.length - 1].time);
          setPmData(
            pmData.concat(data.map((d) => ({ x: d.time, y: d.particulateMatter })))
          );
          setNoxData(
            noxData.concat(data.map((d) => ({ x: d.time, y: d.NOx })))
          );
          setCoData(
            coData.concat(data.map((d) => ({ x: d.time, y: d.CO })))
          );
        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function to trim the data arrays to the max number of data points
  const trimData = (data) => {
    if (data.length > maxNumDataPoints) {
      return data.slice(data.length - maxNumDataPoints, data.length);
    } else {
      return data;
    }
  };

  // function that combines the trimData and pollDatabase functions
  const updateData = () => {
    pollDatabase();
    setPmData(trimData(pmData));
    setNoxData(trimData(noxData));
    setCoData(trimData(coData));
  };
  
  const pollRate = 5 // in seconds
  useEffect(() => {
    const intervalId = setInterval(updateData, pollRate*1000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  });

  // Max Data Points slider
  const handleSliderChange = (event, newValue) => {
    setMaxNumDataPoints(newValue);
  };

  const handleInputChange = (event) => {
    setMaxNumDataPoints(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const absoluteMaxNumDataPoints = 100;

  const handleBlur = () => {
    if (maxNumDataPoints < 1) {
      setMaxNumDataPoints(1);
    } else if (maxNumDataPoints > absoluteMaxNumDataPoints) {
      setMaxNumDataPoints(absoluteMaxNumDataPoints);
    }
  };

  return (
    <Container>
      <Box sx={{ width: 250 }}>
        <Typography id="input-slider" gutterBottom>
          Max Number of Data Points
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={maxNumDataPoints}
              onChange={handleSliderChange}
              onBlur={handleBlur}
              aria-labelledby="input-slider"
              step={1}
              min={1}
              max={absoluteMaxNumDataPoints}
            />
          </Grid>
          <Grid item>
            <Input
              value={maxNumDataPoints}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 1,
                min: 1,
                max: absoluteMaxNumDataPoints,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid xs={6} style={{ height: 400 }}>
          <LiveLineChart
            botAxisLabel="Time"
            leftAxisLabel="Particulate Matter"
            data={pmData}
          />
        </Grid>

        <Grid xs={6} style={{ height: 400 }}>
          <LiveLineChart
            botAxisLabel="Time"
            leftAxisLabel="NOx"
            data={noxData}
          />
        </Grid>

        <Grid xs={12} style={{ height: 400 }}>
          <LiveLineChart botAxisLabel="Time" leftAxisLabel="CO" data={coData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
