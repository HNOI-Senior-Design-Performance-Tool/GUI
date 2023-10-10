import React from "react";
import LiveLineChart from "../components/LiveLineChart";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from '@mui/material';
import { ColorModeContext, tokens } from "../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


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
