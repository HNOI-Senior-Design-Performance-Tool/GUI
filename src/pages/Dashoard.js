import React from "react";
import LiveLineChart from "../elements/LiveLineChart";
import Grid from "@mui/material/Unstable_Grid2";



const Dashboard = () => {

  const gridStyle = {
    backgroundColor: "#f0f0f0", // Set your desired background color here
    color: "#f0f0f0",
    padding: "16px", // Add padding as needed
    height: 400,
  };


  return (
    <div>
      <Grid container spacing={1} style={{ backgroundColor: "#f0f0f0" }}>
        <Grid xs={6} style={gridStyle}>
          <LiveLineChart
            botAxisLabel="Time"
            leftAxisLabel="Particulate Matter"
          />
        </Grid>

        <Grid xs={6} style={gridStyle}>
          <LiveLineChart botAxisLabel="Time" leftAxisLabel="NOx" />
        </Grid>

        <Grid xs={12} style={gridStyle}>
          <LiveLineChart botAxisLabel="Time" leftAxisLabel="CO" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
