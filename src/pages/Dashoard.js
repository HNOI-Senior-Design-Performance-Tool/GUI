import React, { useState, useEffect } from "react";
import LiveLineChart from "../components/LiveLineChart";

import { Box, Grid, Input, Typography, Alert } from "@mui/material";
import { CustomSlider } from "../components/CustomSlider";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";

import axios from 'axios';
import moment from "moment-timezone";
import { Container } from "@nivo/core";

const Dashboard = () => {
  let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [maxNumDataPoints, setMaxNumDataPoints] = useState(30); // max number of data points to display on the chart

  // const initTime = moment.utc();
  const initTime = moment("2023-10-01T00:00:00.000Z");

  const [latestTime, setLatestTime] = useState(initTime); // latest timestamp of data received from the database
  //const [currentTime, setCurrentTime] = useState(moment.utc()); // current time
  const [currentTime, setCurrentTime] = useState(
    moment("2023-11-11T12:00:00.001+00:00").utc()
  ); // current time

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
        "http://localhost:8080/api/vehicleData/latestDataGT/" +
          latestTime.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")
      )
      .then((response) => {
        const data = response.data;

        if (data.length > 0) {
          setLatestTime(moment(data[data.length - 1].time));

          setPmData(
            pmData.concat(
              data.map((d) => ({ x: d.time, y: d.particulateMatter }))
            )
          );
          setNoxData(
            noxData.concat(data.map((d) => ({ x: d.time, y: d.NOx })))
          );
          setCoData(coData.concat(data.map((d) => ({ x: d.time, y: d.CO }))));
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

  const getTimeDiffData = (data) => {
    return data.map((d) => ({
      x: "-" + currentTime.diff(moment(d.x), "seconds"),
      y: d.y,
    }));
  };

  // Functions that facillitate live data updates
  const updateData = () => {
    // Maintain the current time for calculating the time difference for each data point
    //setCurrentTime(moment.utc());

    // Poll the database for new data and update the data states
    pollDatabase();

    // Trim the data arrays to the max number of data points
    setPmData(trimData(pmData));
    setNoxData(trimData(noxData));
    setCoData(trimData(coData));
  };

  const updateRate = 1; // in seconds
  useEffect(() => {
    const updateIntervalId = setInterval(updateData, updateRate * 1000);

    return () => clearInterval(updateIntervalId); // Clean up the interval on unmount
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
      <Alert severity="info">
        Current Time:{" "}
        {currentTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
      </Alert>
      <Alert severity="info" sx={{ mb: 2 }}>
        Data last recieved:{" "}
        {latestTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
      </Alert>

      <Box sx={{ width: 250, height: 300 }}>
        <Typography id="input-slider" gutterBottom>
          Max Number of Data Points
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <TimelineRoundedIcon />
          </Grid>

          <Grid item xs>
            <CustomSlider
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

      <Container>
        <Grid container spacing={2}>
          <Grid xs={4} style={{ height: 300 }}>
            <LiveLineChart
              botAxisLabel="Time"
              leftAxisLabel="Particulate Matter"
              data={getTimeDiffData(pmData, "particulateMatter")}
            />
          </Grid>

          <Grid xs={4} style={{ height: 300 }}>
            <LiveLineChart
              botAxisLabel="Time"
              leftAxisLabel="NOx"
              data={getTimeDiffData(noxData, "NOx")}
            />
          </Grid>

          <Grid xs={4} style={{ height: 300 }}>
            <LiveLineChart
              botAxisLabel="Time"
              leftAxisLabel="CO"
              data={getTimeDiffData(coData, "CO")}
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Dashboard;
