import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@nivo/core";

import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

import CustomResponsiveBar from "../components/CustomResponsiveBar";
import CustomResponsiveBullet from "../components/CustomResponsiveBullet";

const WithHydrogen = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let barData = [
    {
      Vehicle: "2016 Ford Escape",
      CO2: data.average_CO2_emissions,
      NOx: data.average_NOx_emissions,
      PM: data.average_PM_emissions,
    },
  ];

  let bulletData = [
    {
      id: "2016 Ford Escape",
      ranges: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      measures: [12, 5],
      markers: [14],
    },
  ];

  return (
    <Box>
      <Typography variant="h1" component="h2" align="center" sx={{ mt: 5, mb: 5 }}>
        With Hydrogen
      </Typography>

      <Container>
        <Grid container spacing={1}>
          <Grid item xs={4} style={{ height: 500 }}>
            <CustomResponsiveBar
              barData={barData}
              botAxisLabel="Vehicle"
              leftAxisLabel="Averaged Emissions (L)"
            />
          </Grid>

          <Grid item xs={4} style={{ height: 300 }}>
            <CustomResponsiveBullet
              bulletData={bulletData.map((d) => ({
                ...d,
                title: (
                  <text dy={-12}>
                    <tspan
                      style={{
                        fill: colors.grey[100],
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      {d.id}
                    </tspan>
                  </text>
                ),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default WithHydrogen;
