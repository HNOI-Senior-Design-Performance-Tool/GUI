import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@nivo/core";

import CustomResponsiveBar from "../components/CustomResponsiveBar";

const WithHydrogen = ({ data }) => {

  let barData = [
    {
      vehicle: "2016 Ford Escape",
      CO2: data.average_CO2_emissions,
      NOx: data.average_NOx_emissions,
      PM: data.average_PM_emissions,
    },
  ];

  console.log(barData);

  return (
    <Box>

      <Typography variant="h1" component="h2" align="center" sx={{ mt: 5 }}>
        With Hydrogen
      </Typography>

      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4} style={{ height: 500 }}>
            <CustomResponsiveBar barData={barData} />
          </Grid>
        </Grid>
      </Container>

    </Box>
  );
}

export default WithHydrogen;
