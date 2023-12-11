import { Box, Grid, Typography, Button, CircularProgress } from "@mui/material";
import { Addchart } from "@mui/icons-material";
import { Container } from "@nivo/core";

import { useState, useEffect, useContext } from "react";
import axios from "axios";

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

  const { averagedDataWithHydrogenFuel,
		  averagedDataWithoutHydrogenFuel,
		  summedDataWithHydrogenFuel,
		  summedDataWithoutHydrogenFuel,
		  updateAggregateData 
		} = useContext(AggregateDataContext);

  const { selectedVehicle } = useContext(VehicleContext);

  const [selectedEmissionType, setSelectedEmissionType] = useState("default");
  const [infoCardData, setInfoCardData] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const handleBarClick = (d) => {
    setSelectedEmissionType(d.id);
    setInfoCardData(d.value);
  }


  const [barData, setBarData] = useState([
		{
			Vehicle: "With Hydrogen Fuel" || "Unknown",
			CO2: averagedDataWithHydrogenFuel.CO ? Number(averagedDataWithHydrogenFuel.CO.toFixed(2)) : -1,
			NOx: averagedDataWithHydrogenFuel.NOx ? Number(averagedDataWithHydrogenFuel.NOx.toFixed(2)) : -1,
			PM: averagedDataWithHydrogenFuel.particulateMatter
				? Number(averagedDataWithHydrogenFuel.particulateMatter.toFixed(2))
				: -1,
		},
		{
			Vehicle: "Without Hydrogen Fuel" || "Unknown",
			CO2: averagedDataWithoutHydrogenFuel.CO ? Number(averagedDataWithoutHydrogenFuel.CO.toFixed(2)) : -1,
			NOx: averagedDataWithoutHydrogenFuel.NOx ? Number(averagedDataWithoutHydrogenFuel.NOx.toFixed(2)) : -1,
			PM: averagedDataWithoutHydrogenFuel.particulateMatter
				? Number(averagedDataWithoutHydrogenFuel.particulateMatter.toFixed(2))
				: -1,
		},
  ]);

  const [bulletData, setBulletData] = useState([
    {
      id: selectedVehicle.vehicleName || "Unknown",
      ranges: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      measures: [averagedDataWithHydrogenFuel.mpg ? Number(averagedDataWithHydrogenFuel.mpg.toFixed(2)) : 0],
      markers: [averagedDataWithoutHydrogenFuel.mpg ? Number(averagedDataWithoutHydrogenFuel.mpg.toFixed(2)) : 0],
    },
  ]);

  useEffect(() => {
    setBarData([
		{
			Vehicle: "With Hydrogen Fuel" || "Unknown",
			CO2: averagedDataWithHydrogenFuel.CO ? Number(averagedDataWithHydrogenFuel.CO.toFixed(2)) : -1,
			NOx: averagedDataWithHydrogenFuel.NOx ? Number(averagedDataWithHydrogenFuel.NOx.toFixed(2)) : -1,
			PM: averagedDataWithHydrogenFuel.particulateMatter
				? Number(averagedDataWithHydrogenFuel.particulateMatter.toFixed(2))
				: -1,
		},
		{
			Vehicle: "Without Hydrogen Fuel" || "Unknown",
			CO2: averagedDataWithoutHydrogenFuel.CO ? Number(averagedDataWithoutHydrogenFuel.CO.toFixed(2)) : -1,
			NOx: averagedDataWithoutHydrogenFuel.NOx ? Number(averagedDataWithoutHydrogenFuel.NOx.toFixed(2)) : -1,
			PM: averagedDataWithoutHydrogenFuel.particulateMatter
				? Number(averagedDataWithoutHydrogenFuel.particulateMatter.toFixed(2))
				: -1,
		},
	]);

    setBulletData([
		{
			id: selectedVehicle.vehicleName || "Unknown",
			ranges: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
			measures: [averagedDataWithHydrogenFuel.mpg ? Number(averagedDataWithHydrogenFuel.mpg.toFixed(2)) : 0],
			markers: [averagedDataWithoutHydrogenFuel.mpg ? Number(averagedDataWithoutHydrogenFuel.mpg.toFixed(2)) : 0],
		},
	]);
  }, [averagedDataWithHydrogenFuel, selectedVehicle]);

const updateData = () => {
	setIsLoading(true);
	updateAggregateData()
		.then(() => {
			setIsLoading(false);
		})
		.catch((error) => {
			console.error(error);
			setIsLoading(false);
		});
};


  return (
		<Box>
			<Typography variant="h1" component="h2" align="center" sx={{ mt: 5, mb: 5 }}>
				With Hydrogen
			</Typography>

			<Grid container spacing={2} sx={{ pl: 2, pr: 2 }}>
				<Grid item xs={3}>
					<Button
						variant="contained"
						color="success"
						sx={{ mb: 4 }}
						onClick={updateData}
						disabled={isLoading}
						startIcon={<Addchart />}
					>
						Update Aggregate Data
					</Button>

					{isLoading && <CircularProgress color="success" sx={{ ml: 2 }} />}
				</Grid>
			</Grid>

			<Container>
				<Grid container spacing={2} sx={{ pl: 2, pr: 2 }}>
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
						<Typography variant="h2" component="h2" align="center" sx={{ mt: 5, mb: 5 }}>
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
