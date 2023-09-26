import React from "react";
import LiveLineChart from "../elements/LiveLineChart";
import Grid from "@mui/material/Unstable_Grid2";


const Dashboard = () => {
  


  return (
    <Grid container spacing={2}>

      <Grid xs={6} style={{ height: 400 }}>
        <LiveLineChart
          color="hsl(304, 70%, 50%)"
          botAxisLabel="Time"
          leftAxisLabel="Particulate Matter"
        />
      </Grid>

      <Grid xs={6} style={{ height: 400 }}>
        <LiveLineChart
          color="hsl(239, 70%, 50%)"
          botAxisLabel="Time"
          leftAxisLabel="NOx"
        />
      </Grid>

      <Grid xs={12} style={{ height: 400 }}>
        <LiveLineChart
          color="hsl(142, 70%, 50%)"
          botAxisLabel="Time"
          leftAxisLabel="CO"
        />
      </Grid>
      
    </Grid>
  );
};

export default Dashboard;