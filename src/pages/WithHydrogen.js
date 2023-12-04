import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@nivo/core";

import { useState, useContext } from "react";

import { tokens } from "../theme";
import { useTheme } from "@mui/material/styles";

import CustomResponsiveBar from "../components/CustomResponsiveBar";
import CustomResponsiveBullet from "../components/CustomResponsiveBullet";

import { EmissionInfoCard } from "../components/InfoCards";

import { AggregateDataContext } from "../context/AggregateDataContext";
import { VehicleContext } from "../context/VehicleContext";

const WithHydrogen = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { averagedData, summedData } = useContext(AggregateDataContext);
  const { selectedVehicle } = useContext(VehicleContext);

  const [selectedEmissionType, setSelectedEmissionType] = useState("default");
  const [infoCardData, setInfoCardData] = useState();

  const handleBarClick = (d) => {
    setSelectedEmissionType(d.id);
    setInfoCardData(d.value);
  }

  // load bar with averaged data
  // use all zeros if no data is available
  let barData = [
    {
      Vehicle: selectedVehicle.vehicleName || "Unknown",
      CO2: averagedData.CO ? Number(averagedData.CO.toFixed(2)) : -1,
      NOx: averagedData.NOx ? Number(averagedData.NOx.toFixed(2)) : -1,
      PM: averagedData.particulateMatter ? Number(averagedData.particulateMatter.toFixed(2)) : -1,
    },
  ];

  let bulletData = [
		{
			id: selectedVehicle.vehicleName || "Unknown",
			ranges: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
			measures: [averagedData.mpg ? Number(averagedData.mpg.toFixed(2)) : 0],
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
            <EmissionInfoCard data={infoCardData} emissionType={selectedEmissionType} />
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
