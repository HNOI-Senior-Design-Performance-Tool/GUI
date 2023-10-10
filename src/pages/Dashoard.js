import React from "react";
import LiveLineChart from "../components/LiveLineChart";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from '@mui/material';
import { ColorModeContext, tokens } from "../theme";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


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
