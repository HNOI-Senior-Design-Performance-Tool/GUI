import React, { useState, useEffect, useContext } from "react";
import LiveLineChart from "../components/LiveLineChart";

import { Box, Grid, Input, Typography, Alert } from "@mui/material";
import { CustomSlider } from "../components/CustomSlider";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";

import axios from 'axios';
import moment from "moment-timezone";
import { Container } from "@nivo/core";

import { VehicleContext } from "../context/VehicleContext";

const Dashboard = () => {
  let userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const [maxNumDataPoints, setMaxNumDataPoints] = useState(30); // max number of data points to display on the chart

  // const initTime = moment.utc();
  const initTime = moment("2000-01-01T00:00:00.000Z");

  const [latestTime, setLatestTime] = useState(initTime); // latest timestamp of data received from the database
  const [currentTime, setCurrentTime] = useState(moment.utc()); // current time
  // const [currentTime, setCurrentTime] = useState(moment("2023-11-11T12:00:00.001+00:00").utc()); // current time

  // create a state for each line chart's data
  // initialize each state with the latest datapoint
  const [pmData, setPmData] = useState([{ x: currentTime, y: 0 }]);
  const [noxData, setNoxData] = useState([{ x: currentTime, y: 0 }]);
  const [coData, setCoData] = useState([{ x: currentTime, y: 0 }]);
  const [flowRateData, setFlowRateData] = useState([{ x: currentTime, y: 0 }]);

  const { selectedVehicle } = useContext(VehicleContext);

  // poll the database for an array of all the new data (using '/latestDataGT/:startTime')
  // then append new data to the existing data
  const pollDatabase = () => {
    axios
      .get(
        "https://hnoi-api.onrender.com/api/vehicleData/latestDataGT/" +
          latestTime.utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]") +
          "?vehicleID=" + selectedVehicle.vehicleID
      )
      .then((response) => {

      // Update the current time
      setCurrentTime(moment.utc());

			const data = response.data;

			if (data.length > 0) {
				setLatestTime(moment(data[data.length - 1].createdAt));

				setPmData(trimData(pmData.concat(data.map((d) => ({ x: d.createdAt, y: d.particulateMatter })))));
				setNoxData(trimData(noxData.concat(data.map((d) => ({ x: d.createdAt, y: d.NOx })))));
				setCoData(trimData(coData.concat(data.map((d) => ({ x: d.createdAt, y: d.CO })))));
				setFlowRateData(trimData(flowRateData.concat(data.map((d) => ({ x: d.createdAt, y: d.flowrate })))));
			}
      else {
        // Trim the data arrays to the max number of data points
        setPmData(trimData(pmData));
        setNoxData(trimData(noxData));
        setCoData(trimData(coData));
		setFlowRateData(trimData(flowRateData));
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
      x: "-" + moment.utc().diff(moment(d.x), "seconds"),
      y: d.y,
    }));
  };
  
  useEffect(() => {
		// Reset the line chart data when selectedVehicle changes
		setPmData([{ x: currentTime, y: 0 }]);
		setNoxData([{ x: currentTime, y: 0 }]);
		setCoData([{ x: currentTime, y: 0 }]);
		setFlowRateData([{ x: currentTime, y: 0 }]);

		// Reset the latest time when selectedVehicle changes
		setLatestTime(initTime);

		// eslint-disable-next-line
  }, [selectedVehicle]);

  const updateRate = 1; // in seconds
  useEffect(() => {
    const updateIntervalId = setInterval(pollDatabase, updateRate * 1000);

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
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ pt: 3, pl: 2, pr: 2 }}>
				<Grid item xs={3}>
					<Alert severity="info">
						Current Time: {currentTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
					</Alert>
				</Grid>

				<Grid item xs={3}>
					<Alert severity="info" sx={{ mb: 2 }}>
						Data Last Recieved: {latestTime.tz(userTimezone).format("MM-DD-YYYY HH:mm:ss")}
					</Alert>
				</Grid>

				<Grid item xs={2}>
					<Box sx={{ width: 250, height: 100, justifyContent: "center", alignItems: "center" }}>
						<Typography id="input-slider" gutterBottom>
							Max Number of Data Points
						</Typography>

						<Grid container spacing={2} alignItems="center">
							<Grid item>
								<TimelineRoundedIcon />
							</Grid>

							<Grid item xs={3}>
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

							<Grid item xs={3}>
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
				</Grid>
			</Grid>

			<Container>
				<Grid container spacing={2} sx={{ pl: 4, pr: 2 }}>
					<Grid xs={6} style={{ height: 300 }}>
						<LiveLineChart
							botAxisLabel="Time"
							leftAxisLabel="Particulate Matter"
							data={getTimeDiffData(pmData, "particulateMatter")}
						/>
					</Grid>

					<Grid xs={6} style={{ height: 300 }}>
						<LiveLineChart botAxisLabel="Time" leftAxisLabel="NOx" data={getTimeDiffData(noxData, "NOx")} />
					</Grid>

					<Grid xs={6} style={{ height: 300 }}>
						<LiveLineChart botAxisLabel="Time" leftAxisLabel="CO" data={getTimeDiffData(coData, "CO")} />
					</Grid>

					<Grid xs={6} style={{ height: 300 }}>
						<LiveLineChart
							botAxisLabel="Time"
							leftAxisLabel="Flow Rate"
							data={getTimeDiffData(flowRateData, "flowrate")}
						/>
					</Grid>

				</Grid>
			</Container>
		</Container>
  );
};

export default Dashboard;
