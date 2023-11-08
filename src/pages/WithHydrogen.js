import { Box, Card, Grid, Typography } from "@mui/material";
import { Container } from "@nivo/core";

import { useState } from "react";

import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

import CustomResponsiveBar from "../components/CustomResponsiveBar";
import CustomResponsiveBullet from "../components/CustomResponsiveBullet";

import { CO2InfoCard, NOxInfoCard, PMInfoCard } from "../components/InfoCards";

const WithHydrogen = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [infoCard, setInfoCard] = useState(<CO2InfoCard data={data} />);

  const handleBarClick = (barData) => {
    const emissionType = barData.id;

    switch (emissionType) {
      case "CO2":
        setInfoCard(<CO2InfoCard data={data} />);
        break;
      case "NOx":
        setInfoCard(<NOxInfoCard data={data} />);
        break;
      case "PM":
        setInfoCard(<PMInfoCard data={data} />);
        break;
      default:
        setInfoCard(<CO2InfoCard data={data} />);
        break;
    }

  };

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
      measures: [data.average_MPG],
      markers: [14],
    },
  ];

  return (
    <Box>
      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{ mt: 5, mb: 5 }}
      >
        With Hydrogen
      </Typography>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ height: 500 }}>
            <CustomResponsiveBar
              barData={barData}
              botAxisLabel="Vehicle"
              leftAxisLabel="Averaged Emissions (L)"
              onClick={handleBarClick}
            />
          </Grid>

          <Grid item xs={4} style={{ height: 500 }}>
            {infoCard}
          </Grid>

          <Grid item xs={4} style={{ height: 380 }}>
            <Typography
              variant="h2"
              component="h2"
              align="center"
              sx={{ mt: 5, mb: 5 }}
            >
              MPG Comparison
            </Typography>

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
